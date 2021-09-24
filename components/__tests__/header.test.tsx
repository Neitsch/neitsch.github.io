import Header from "../header";
import { render } from "@testing-library/react";
import React from "react";

describe("header", () => {
  it("renders header", () => {
    // eslint-disable-next-line
    expect.assertions(1);
    const { container } = render(<Header />);

    expect(container).toMatchInlineSnapshot(`
<div>
  <a
    class="MuiTypography-root MuiTypography-h1 MuiLink-root MuiLink-underlineAlways css-1xvxpd9-MuiTypography-root-MuiLink-root"
    href="/"
  >
    Yet another SWE Blog.
  </a>
</div>
`);
  });
});
