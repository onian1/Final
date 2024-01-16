import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: true
  },
  colors: {
    brand: {
      light: "#3a85ff",
      dark: "#0a4cff", 
    },
  },
  components: {
    Card: {
      baseStyle: {
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      },
      variants: {
        dark: {
          boxShadow: "0 4px 8px rgba(255, 255, 255, 0.1)",
        },
      },
    },
  },
});
