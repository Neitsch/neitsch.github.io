import { Link as MuiLink } from "@material-ui/core";
import Link from "next/link";

export default function Header(): JSX.Element {
  return (
    <Link href="/" passHref>
      <MuiLink variant="h1">Nigel&apos;s Blog.</MuiLink>
    </Link>
  );
}
