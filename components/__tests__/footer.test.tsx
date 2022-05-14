import Footer from "../footer";
import { render } from "@testing-library/react";
import React from "react";

describe("footer", () => {
  it("renders footer", () => {
    // eslint-disable-next-line
    expect.assertions(1);
    const { container } = render(<Footer />);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <footer>
          <div
            class="MuiContainer-root MuiContainer-maxWidthLg css-1oqqzyl-MuiContainer-root"
          >
            <p
              class="MuiTypography-root MuiTypography-body1 css-ahj2mt-MuiTypography-root"
            >
              Built with NextJS. Find the source 
              <a
                class="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-1ps4owl-MuiTypography-root-MuiLink-root"
                href="https://github.com/Neitsch/neitsch.github.io"
              >
                here
              </a>
              .
            </p>
          </div>
        </footer>
      </div>
    `);
  });
});
