/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  /* Vil du overskrive eller extende tailwinds indstillinger?  */

  theme: {
    /* Tilføj din egen farvepalette nedenfor */
    colors: {
      transparent: "transparent",
      current: "currentColor",
      red: {
        50: "rgba(254, 246, 246, 1)",
        100: "rgba(252, 232, 233, 1)",
        200: "rgba(249, 204, 207, 1)",
        300: "rgba(245, 168, 172, 1)",
        400: "rgba(241, 126, 132, 1)",
        500: "rgba(231, 35, 45, 1)",
        600: "rgba(216, 24, 33, 1)",
        700: "rgba(184, 20, 28, 1)",
        800: "rgba(152, 17, 23, 1)",
        900: "rgba(115, 13, 18, 1)",
        950: "rgba(83, 9, 13, 1)",
      },
      blue: {
        50: "rgba(247, 247, 253, 1)",
        100: "rgba(242, 243, 252, 1)",
        200: "rgba(230, 232, 249, 1)",
        300: "rgba(217, 220, 247, 1)",
        400: "rgba(201, 205, 243, 1)",
        500: "rgba(183, 189, 239, 1)",
        600: "rgba(163, 170, 235, 1)",
        700: "rgba(138, 147, 229, 1)",
        800: "rgba(105, 116, 222, 1)",
        900: "rgba(63, 78, 212, 1)",
        950: "rgba(35, 48, 159, 1)",
      },

      white: "#fff",
      black: "#000",
    },

    /* Tilføj din egen spacing nedenfor */
    spacing: {
      xxs: "8px",
      xs: "16px",
      s: "24px",
      sm: "32px",
      m: "40px",
      ml: "48px",
      lg: "64px",
      xl: "80px",
      "2xl": "96px",
      "3xl": "112px",
      "4xl": "128px",
      "5xl": "160px",
      "6xl": "208px",
      "7xl": "320px",
      "8xl": "360px",
      "9xl": "424px",
    },

    /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
    fontFamily: {
      sans: ["Gabarito", "serif"],
      display: ["Courier", "monospace"] /* eksempel på ekstra font */,
    },

    /* Tilføj dit typografiske hierarki herunder */
    fontSize: {
      konsultativDesk: ["1rem", { lineHeight: "1.2rem" }],
      bodyDesk: ["1.125rem", { lineHeight: "1.5rem" }],
      baseDesk: ["1.333rem", { lineHeight: "1.8rem" }],
      smallDesk: ["1.777rem", { lineHeight: "2rem" }],
      smallMediumDesk: ["2.369rem", { lineHeight: "2.5rem" }],
      mediumDesk: ["3.158rem", { lineHeight: "3.5rem" }],
      mediumLargeDesk: ["4.209rem", { lineHeight: "4rem" }],
      largeDesk: ["5.61rem", { lineHeight: "5rem" }],
      xlargeDesk: ["6rem", { lineHeight: "6rem" }],

      konsultativMobile: ["0.8rem", { lineHeight: "1rem" }],
      bodyMobile: ["1rem", { lineHeight: "1.5rem" }],
      baseMobile: ["1.2rem", { lineHeight: "1.8rem" }],
      smallMobile: ["1.44rem", { lineHeight: "2rem" }],
      smallMediumMobile: ["1.728rem", { lineHeight: "2.5rem" }],
      mediumMobile: ["2.074rem", { lineHeight: "3rem" }],
      mediumLargeMobile: ["2.488rem", { lineHeight: "3.5rem" }],
      largeMobile: ["2.986rem", { lineHeight: "4rem" }],
      xlargeMobile: ["6rem", { lineHeight: "6rem" }],
    },

    /* Tilføj dit fontvægt-hierarki nedenfor */
    fontWeight: {
      light: "300",
      regular: "400",
      semibold: "500",
      bold: "600",
      extrabold: "700",
    },

    /* Borders - borderstørrelser herunder */
    borderWidth: {
      DEFAULT: "1px",
      none: "0px",
      xxs: "1px",
      xs: "2px",
      sm: "3px",
      md: "4px",
      lg: "5px",
      xl: "6px",
      "2xl": "7px",
      "3xl": "8px",
      "4xl": "9px",
    },

    /* Box shadows herunder */

    extend: {
      /* Border radius størrelser herunder */
      borderRadius: {
        DEFAULT: "1.25rem",
        none: "0px",
        "border_radius-xs": "7px",
        "border_radius-sm": "14px",
        "border_radius-xl": "49px",
        "border_radius-md": "21.5px",
        "border_radius-lg": "35px",
        "border_radius-2xl": "79px",
        "border_radius-3xl": "100px",
      },
      BoxShadow: {
        dropred: "5px 6px 7px 0px #FF005D",
        dropblue: "5px 6px 7px 0px #A3AAEB",
        innerred: "5px 6px 7px 0px #FF005D inset",
        innerblue: "5px 6px 7px 0px #A3AAEB inset",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};
