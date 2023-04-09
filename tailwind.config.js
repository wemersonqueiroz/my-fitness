module.exports = {
  purge: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.ts",
    "./src/**/*.tsx",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        light: "#7F6DC2", // Light purple
        dark: "#4527A0", // Dark purple
      },
      "primary-hover": {
        light: "#5E35B1",
        dark: "#311B92",
      },
      "primary-active": {
        light: "#4527A0",
        dark: "#1A237E",
      },
      "primary-disabled": {
        light: "#B3B3B3",
        dark: "#767676",
      },
      secondary: {
        light: "#F5F5F5", // Light gray
        dark: "#2C2C2C", // Dark gray
      },
      "secondary-border": {
        light: "#B3B3B3",
        dark: "#767676",
      },
      "secondary-hover": {
        light: "#E0E0E0",
        dark: "#1A1A1A",
      },
      "secondary-active": {
        light: "#CCCCCC",
        dark: "#0D0D0D",
      },
      "secondary-disabled": {
        light: "#B3B3B3",
        dark: "#767676",
      },
      background: {
        primary: {
          light: "#F5F5F5", // Light gray
          dark: "#2C2C2C", // Dark gray
        },
        secondary: {
          light: "#E0E0E0",
          dark: "#1A1A1A",
        },
        tertiary: {
          light: "#CCCCCC",
          dark: "#0D0D0D",
        },
      },
      font: {
        primary: {
          light: "#FFFFFF", // White
          dark: "#F5F5F5", // Light gray
        },
        secondary: {
          light: "#696969",
          dark: "#B3B3B3",
        },
        tertiary: {
          light: "#B3B3B3",
          dark: "#696969",
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active", "disabled"],
      borderColor: ["hover", "focus"],
      opacity: ["disabled"],
    },
  },
  plugins: [],
}
