import { createTheme } from "@mui/material/styles";

export default createTheme({
  components: {
    MuiLink: { defaultProps: { underline: "none", color: "inherit" } },
  },
});
