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
      "spacing-xxs": "8px",
      "spacing-xs": "16px",
      "spacing-s": "24px",
      "spacing-sm": "32px",
      "spacing-m": "40px",
      "spacing-ml": "48px",
      "spacing-lg": "64px",
      "spacing-xl": "80px",
      "spacing-2xl": "96px",
      "spacing-3xl": "112px",
      "spacing-4xl": "128px",
      "spacing-5xl": "160px",
      "spacing-6xl": "208px",
      "spacing-7xl": "320px",
      "spacing-8xl": "360px",
      "spacing-9xl": "424px",
    },

    /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
    // fontFamily: {
    //     sans: ['Prompt', 'sans-serif'],
    //     'display': ['Courier', 'monospace'], /* eksempel på ekstra font */
    // },

    /* Tilføj dit typografiske hierarki herunder */
    // fontSize: {
    //     base: ['1rem', { lineHeight: '1.5rem' }],
    //     large: ['2.5rem', { lineHeight: '3.75rem' }],
    //   },

    /* Tilføj dit fontvægt-hierarki nedenfor */
    //   fontWeight: {
    //     regular: '400',
    //   },

    /* Borders - borderstørrelser herunder */
    borderWidth: {
      DEFAULT: "1px",
      "border-none": "0px",
      "border-xxs": "1px",
      "border-xs": "2px",
      "border-sm": "3px",
      "border-md": "4px",
      "border-lg": "5px",
      "border-xl": "6px",
      "border-2xl": "7px",
      "border-3xl": "8px",
      "border-4xl": "9px",
    },

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

    /* Box shadows herunder */
    BoxShadow: {
      outerRed: "5px 6px 7px 0px #FF005D",
      outerBlue: "5px 6px 7px 0px #A3AAEB",
      innerRed: "5px 6px 7px 0px #FF005D inset",
      innerBlue: "5px 6px 7px 0px #A3AAEB inset",
    },

    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
};
