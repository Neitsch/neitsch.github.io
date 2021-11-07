import Footer from "../components/footer";
import Meta from "../components/meta";
import * as React from "react";

export default function Layout({
  children,
}: {
  readonly children: Readonly<JSX.Element | JSX.Element[]>;
}): JSX.Element {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
