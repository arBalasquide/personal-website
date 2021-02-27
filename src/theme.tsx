import { extendTheme } from "@chakra-ui/react";

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = {
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
};

const theme = extendTheme({
  colors: {
    black: "#16161D",
  },
  breakpoints,
  fonts,
});

export default theme;
