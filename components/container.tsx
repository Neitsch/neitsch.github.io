import { Container as MuiContainer } from "@mui/material";
import type { ReactNode } from "react";

export default function Container({
  children,
}: {
  readonly children: ReactNode;
}): JSX.Element {
  return <MuiContainer>{children}</MuiContainer>;
}
