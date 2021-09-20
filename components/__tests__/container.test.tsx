import Container from "../container";
import { render } from "@testing-library/react";
import React from "react";

describe("container", () => {
  it("renders container", () => {
    // eslint-disable-next-line
    expect.assertions(1);
    const elem = <Container>Test</Container>;
    const { container } = render(elem);

    expect(container).toMatchInlineSnapshot(`
<div>
  <div
    class="MuiContainer-root MuiContainer-maxWidthLg css-1oqqzyl-MuiContainer-root"
  >
    Test
  </div>
</div>
`);
  });
});
