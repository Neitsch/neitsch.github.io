import Alert from "../components/alert";
import Footer from "../components/footer";
import Meta from "../components/meta";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function Layout({
  preview,
  children,
}: {
  preview: boolean;
  children: JSX.Element | JSX.Element[];
}): JSX.Element {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
