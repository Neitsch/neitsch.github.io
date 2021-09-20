import { Container as MuiContainer } from "@material-ui/core";
import type { ReactNode } from "react";

export default function Container({
  children,
}: {
  readonly children: ReactNode;
}): JSX.Element {
  return <MuiContainer>{children}</MuiContainer>;
}
