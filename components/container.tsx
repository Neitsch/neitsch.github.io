import { Container as MuiContainer } from "@material-ui/core";

export default function Container({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}): JSX.Element {
  return <MuiContainer>{children}</MuiContainer>;
}
