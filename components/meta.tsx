import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as React from "react";

export default function Meta(): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string): void => {
      (
        window as unknown as {
          goatcounter: { count: ({ path }: { readonly path: string }) => void };
        }
      ).goatcounter.count({
        path: url,
      });
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return (): void => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);
  return (
    <Head>
      <link href="/favicon/apple-touch-icon.png" sizes="180x180" />
      <link
        href="/favicon/favicon-32x32.png"
        rel="icon"
        sizes="32x32"
        type="image/png"
      />
      <link
        href="/favicon/favicon-16x16.png"
        rel="icon"
        sizes="16x16"
        type="image/png"
      />
      <link href="/favicon/site.webmanifest" rel="manifest" />
      <link color="#000000" href="/favicon/safari-pinned-tab.svg" />
      <link href="/favicon/favicon.ico" rel="icon" />
      <meta content="#000000" name="msapplication-TileColor" />
      <meta content="/favicon/browserconfig.xml" name="msapplication-config" />
      <meta content="#000" name="theme-color" />
      <link href="/feed.xml" rel="alternate" type="application/rss+xml" />
      <meta content="Personal blog." name="description" />
      <script
        async
        data-goatcounter="https://nigel.goatcounter.com/count"
        data-goatcounter-settings="{}"
        src="//gc.zgo.at/count.js"
      />
    </Head>
  );
}
