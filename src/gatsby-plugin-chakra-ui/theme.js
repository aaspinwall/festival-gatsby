import { theme } from "@chakra-ui/core";

const fonts = {
  body: "Futura",
  heading: "Futura",
  mono: "Futura",
};

const colors = { ...theme.colors, y: "#FFDA27" };

const thm = { ...theme, fonts: { ...fonts }, colors };

export default thm;
