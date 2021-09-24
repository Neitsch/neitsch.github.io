import AuthorChip from "../author-chip";
import { render } from "@testing-library/react";
import React from "react";

describe("author chip", () => {
  it("renders a heading", () => {
    // eslint-disable-next-line
    expect.assertions(1);
    const { container } = render(
      <AuthorChip
        author={{
          name: "Author Test",
          slug: "test-author",
          picture: { url: "https://pic-url" },
        }}
      />,
    );

    expect(container).toMatchInlineSnapshot(`
<div>
  <div
    class="MuiButtonBase-root MuiChip-root MuiChip-filled MuiChip-sizeMedium MuiChip-colorDefault MuiChip-clickable MuiChip-clickableColorDefault MuiChip-filledDefault css-15dxc3s-MuiButtonBase-root-MuiChip-root"
    href="/author/test-author"
    tabindex="0"
  >
    <div
      class="MuiAvatar-root MuiAvatar-circular MuiChip-avatar MuiChip-avatarMedium MuiChip-avatarColorDefault css-1wlk0hk-MuiAvatar-root"
    >
      <img
        alt="Author Test"
        class="MuiAvatar-img css-1pqm26d-MuiAvatar-img"
        src="https://pic-url"
      />
    </div>
    <span
      class="MuiChip-label MuiChip-labelMedium css-6od3lo-MuiChip-label"
    >
      Author Test
    </span>
    <span
      class="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"
    />
  </div>
</div>
`);
  });
});
