import Date from "../date";
import { render, screen } from "@testing-library/react";
import React from "react";

describe("Date", () => {
  it("renders a heading", () => {
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
