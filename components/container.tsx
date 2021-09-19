import { Container as MuiContainer } from "@material-ui/core";

export default function Container({
  children,
}: {
  readonly children: (JSX.Element | null)[] | JSX.Element;
}): JSX.Element {
  return <MuiContainer>{children}</MuiContainer>;
}
