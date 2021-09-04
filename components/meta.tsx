import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Meta(): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      (
        window as unknown as {
          goatcounter: { count: ({ path }: { path: string }) => void };
        }
      ).goatcounter.count({
        path: url,
      });
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="description" content={`Personal blog.`} />
      <script
        data-goatcounter-settings="{}"
        data-goatcounter="https://nigel.goatcounter.com/count"
        async
        src="//gc.zgo.at/count.js"
      ></script>
    </Head>
  );
}
