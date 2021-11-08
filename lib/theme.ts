import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export default responsiveFontSizes(
  createTheme({
    components: {
      MuiLink: { defaultProps: { underline: "none", color: "inherit" } },
    },
  }),
);
