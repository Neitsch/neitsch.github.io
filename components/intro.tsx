import Header from "./header";
import { Typography, Box } from "@mui/material";
import * as React from "react";

export default function Intro(): JSX.Element {
  return (
    <Box display="flex">
      <Box flexGrow={1}>
        <Header />
      </Box>
      <Box alignSelf="flex-end">
        <Typography variant="h4">Software engineering notes.</Typography>
      </Box>
    </Box>
  );
}
