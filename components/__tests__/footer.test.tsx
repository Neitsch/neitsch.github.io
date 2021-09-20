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
        <footer
          class="bg-accent-1 border-t border-accent-2"
        >
          <div
            class="MuiContainer-root MuiContainer-maxWidthLg css-1oqqzyl-MuiContainer-root"
          >
            <div
              class="py-28 flex flex-col lg:flex-row items-center"
            >
              <h3
                class="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2"
              >
                Nigel Schuster's blog.
              </h3>
            </div>
          </div>
        </footer>
      </div>
    `);
  });
});
