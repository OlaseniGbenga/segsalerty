import { createTheme } from "@mantine/core";

import { colors } from "@/utils/colors";

const mantineColors = Object.fromEntries(
  Object.entries(colors).map(([name, shades]) => {
    // For colors with only one shade, duplicate it for all 10 shades
    if (shades.length === 1) {
      return [name, Array(10).fill(shades[0])];
    }
    return [name, shades];
  })
);

export const theme = createTheme({
  colors: {
    ...mantineColors,
    dark: [
      "#C1C2C5",
      "#A6A7AB",
      "#909296",
      "#5C5F66",
      "#373A40",
      "#2C2E33",
      "#25262B",
      "#1A1B1E",
      "#141517",
      "#101113",
    ],
  },
});
