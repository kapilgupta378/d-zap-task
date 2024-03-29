/* eslint-disable sort-keys */
/**
 * Dont add if size is smaller than 10px.
 * Dont use `em` or `rem`. Use correct `px` instead.
 */
const sizes = {
  26: "26px",
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js,jsx,ts,tsx}",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  darkMode: "class", // 'media' is the default, change to 'class' if you want to use dark mode in with class names
  theme: {
    screens: {
      xs: "321px",
      sm: "390px",
      smd: "480px",
      md: "650px",
      lmd: "768px",
      slg: "980px",
      lg: "1024px",
      xlg: "1200px",
      xl: "1400px",
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    fontSize: {
      h1: "64px",
      h2: "48px",
      h3: "38px",
      h4: "28px",
      title: "36px",
      subtitle: "24px",
      paragraph: "20px",
      body: "16px",
      xs: "10px",
      caption: "12px",
      small: "10px",
      sm: "12px",
      md: "14px",
      base: "16px",
      lg: "18px",
      xl: "30px",
      xxl: "32px",
    },
    lineHeight: {
      h1: "90%",
      h2: "90%",
      h3: "90%",
      h4: "90%",
      h5: "80%",
      subtitle: "120%",
      paragraph: "140%",
      body: "140%",
      caption: "120%",
      small: "120%",
      sm: "150%",
      md: "150%",
      lg: "150%",
    },
    letterSpacing: {
      h1: "-0.8px",
      h2: "-0.5px",
      h3: "-0.5px",
      h4: "-0.5px",
      subtitle: "-0.2px",
      paragraph: "-0.2px",
      body: "-0.2px",
      caption: "0px",
      small: "0px",
      sm: "0px",
      md: "0px",
      lg: "0px",
    },
    extend: {
      colors: {
        transparent: "transparent",
        neutral: {
          100: "#141414",
          200: "#292929",
          300: "#3B3B3B",
          400: "rgb(163 163 163)",
          500: "#B4B4B4",
          600: "#E2E2E1",
          700: "#F6F6F6",
          800: "#FFFFFF",
        },
        brand: {
          800: "#EAFB06",
          500: "#F8FF99",
        },
        secondary: {
          800: "#0809EC",
          500: "#8A8BFF",
        },
        warning: {
          800: "#EBA013",
          500: "#FFCF76",
        },
        error: {
          800: "#F35858",
          500: "#FF9292",
        },
        orange: {
          500: "#FF2EAB",
        },
        pink: {
          500: "#FF6C22",
        },
        zinc: {
          800: "rgb(39 39 42)",
        },
      },
      width: sizes,
      height: sizes,
      minWidth: sizes,
      minHeight: sizes,
      maxWidth: sizes,
      maxHeight: sizes,
      spacing: {
        xs: "4px",
        sm: "6px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "24px",
        "3xl": "32px",
        "4xl": "40px",
        "5xl": "48px",
        "64": "64px",
        "110": "110px",
        "133": "133px",
      },
      borderRadius: {
        xs: "8px",
        sm: "16px",
        md: "24px",
        lg: "32px",
        xl: "40px",
        "2xl": "48px",
        "20": "20px",
      },
      backgroundColor: {
        light: "#f6f6f6",
        dark: "#292929",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
