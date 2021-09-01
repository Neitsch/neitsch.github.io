import createEmotionCache from "../lib/createEmotionCache";
import theme from "../lib/theme";
import type { EmotionCache } from "@emotion/cache";
import createEmotionServer from "@emotion/server/create-instance";
import {
  DocumentContext,
  /* AppType, */
  NextComponentType,
  AppContextType,
  AppInitialProps,
  AppPropsType,
} from "next/dist/shared/lib/utils";
import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          {/* <meta httpEquiv="Content-Security-Policy" content={csp} /> */}
          <meta name="theme-color" content={theme.palette.primary.main} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (
  ctx: DocumentContext,
): Promise<{
  styles: Record<string, unknown>[];
  html: string;
  head?: (JSX.Element | null)[] | undefined;
}> => {
  const originalRenderPage = ctx.renderPage;

  // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (
        App: NextComponentType<
          AppContextType,
          AppInitialProps & { emotionCache?: EmotionCache },
          AppPropsType & { emotionCache?: EmotionCache }
        >,
      ) => {
        const Component = (
          props: AppPropsType & { emotionCache?: EmotionCache },
        ) => <App emotionCache={cache} {...props} />;
        return Component;
      },
    });

  const initialProps = await Document.getInitialProps(ctx);
  // This is important. It prevents emotion to render invalid HTML.
  // See https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(" ")}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      ...emotionStyleTags,
    ],
  };
};
