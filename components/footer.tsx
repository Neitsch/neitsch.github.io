import Container from "./container";
import { Typography, Link as MuiLink } from "@mui/material";
import Link from "next/link";
import * as React from "react";

export default function Footer(): JSX.Element {
  const link = (
    <Link href="https://github.com/Neitsch/neitsch.github.io" passHref>
      <MuiLink underline="always">here</MuiLink>
    </Link>
  );
  return (
    <footer>
      <Container>
        <Typography>Built with NextJS. Find the source {link}.</Typography>
      </Container>
    </footer>
  );
}
