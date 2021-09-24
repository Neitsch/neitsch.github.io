import { Link as MuiLink } from "@mui/material";
import Link from "next/link";

export default function Header(): JSX.Element {
  return (
    <Link href="/" passHref>
      <MuiLink variant="h1">Yet another SWE Blog.</MuiLink>
    </Link>
  );
}
