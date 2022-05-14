import createEmotionCache from "../lib/createEmotionCache";
import theme from "../lib/theme";
import type { EmotionCache } from "@emotion/cache";
import createEmotionServer from "@emotion/server/create-instance";
import type {
  DocumentContext,
  /* AppType, */
  NextComponentType,
  AppContextType,
  AppInitialProps,
  AppPropsType,
  RenderPageResult,
} from "next/dist/shared/lib/utils";
import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";
import type { ReactFragment, ReactElement } from "react";

export default class MyDocument extends Document {
  public static async getInitialProps(ctx: DocumentContext): Promise<{
    styles: (
      | ReactElement<unknown, JSXElementConstructor<unknwon> | string>
      | ReactFragment
      | number
      | string
    )[];
    html: string;
    head?: (JSX.Element | null)[] | undefined;
  }> {
    const originalRenderPage = ctx.renderPage;

    // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
    // However, be aware that it can have global side effects.
    const cache = createEmotionCache();
    const emotionServer = createEmotionServer(cache);

    ctx.renderPage = (): Promise<RenderPageResult> | RenderPageResult =>
      originalRenderPage({
        enhanceApp: (
          App: NextComponentType<
            AppContextType,
            AppInitialProps & { emotionCache?: EmotionCache },
            AppPropsType & { emotionCache?: EmotionCache }
          >,
        ) => {
          // eslint-disable-next-line react/require-optimization
          const app = function ({
            emotionCache,
            ...props
          }: AppPropsType & { emotionCache?: EmotionCache }): JSX.Element {
            const emotionCacheApp = emotionCache ?? cache;
            // eslint-disable-next-line react/jsx-props-no-spreading
            return <App emotionCache={emotionCacheApp} {...props} />;
          };

          return app;
        },
      });

    const initialProps = await Document.getInitialProps(ctx);
    // This is important. It prevents emotion to render invalid HTML.
    // See https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153
    const emotionStyles = emotionServer.extractCriticalToChunks(
      initialProps.html,
    );
    /* eslint-disable react/no-danger */
    const emotionStyleTags = emotionStyles.styles.map((style) => (
      <style
        dangerouslySetInnerHTML={{ __html: style.css }}
        data-emotion={`${style.key} ${style.ids.join(" ")}`}
        // eslint-disable-next-line react/no-danger
        key={style.key}
      />
    ));
    /* eslint-enable react/no-danger */

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [
        ...React.Children.toArray(initialProps.styles),
        ...emotionStyleTags,
      ],
    };
  }

  public render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          {/* <meta httpEquiv="Content-Security-Policy" content={csp} /> */}
          <meta content={theme.palette.primary.main} name="theme-color" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
