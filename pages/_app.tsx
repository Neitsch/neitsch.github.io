import createEmotionCache from "../lib/createEmotionCache";
import theme from "../lib/theme";
import "../styles/index.css";
import type { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";

const clientSideEmotionCache = createEmotionCache();
function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: {
  Component: React.ComponentType;
  pageProps: { children?: React.ReactNode };
  emotionCache: EmotionCache;
}): JSX.Element {
  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
  /* eslint-enable react/jsx-props-no-spreading */
}

export default MyApp;
