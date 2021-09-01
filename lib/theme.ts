import { createTheme } from "@material-ui/core/styles";

export default createTheme({
  components: {
    MuiLink: { defaultProps: { underline: "none", color: "inherit" } },
  },
});
