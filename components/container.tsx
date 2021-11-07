import { Container as MuiContainer } from "@mui/material";
import type { ReactNode } from "react";
import * as React from "react";

export default function Container({
  children,
}: {
  readonly children: ReactNode;
}): JSX.Element {
  return <MuiContainer>{children}</MuiContainer>;
}
