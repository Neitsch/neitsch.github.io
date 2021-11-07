import { Link as MuiLink } from "@mui/material";
import Link from "next/link";
import * as React from "react";

export default function Header(): JSX.Element {
  return (
    <Link href="/" passHref>
      <MuiLink variant="h1">Yet another SWE Blog.</MuiLink>
    </Link>
  );
}
