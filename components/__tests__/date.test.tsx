import Date from "../date";
import { render } from "@testing-library/react";
import React from "react";

describe("date", () => {
  it("renders a heading", () => {
    expect.assertions(1);
    const { container } = render(<Date dateString="2021-02-02" />);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <time
          datetime="2021-02-02"
        >
          February	2, 2021
        </time>
      </div>
    `);
  });
});
