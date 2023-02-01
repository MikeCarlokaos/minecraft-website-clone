/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-green": "#288123",
        "light-green": "#a0e080",
        "text-green": "#196d17",
        "text-base-green": "#84c94c",
        "nav-green": "#52a535",
        "dark-gray": "#171615",
        "text-dark": "#1d1e1e",
        "footer-dark": "#313131",
        "body-dark": "#202020",
        "light-gray": "#8d8e92",
        "pearl-white": "#e7eaef",
        "base-gray": "#3d3938",
        "dirty-white": "#f8f5f4",
        "dirty-white-secondary": "#ede5e2",
        "dirty-white-tertiary": "#f1edec",
        ash: "#d8d8d8",
        "ash-secondary": "#aba09c",
        "ash-tertiary": "#444",
        "orange-primary": "#ffb054",
        "orange-secondary": "#ffb649",
        "orange-tertiary": "#df8318",
        "light-brown": "#6f2900",
        "bg-violet": "#32122A",
        "red-violet": "#7b1a37",
        "light-blue": "#95e8ff",
        "light-blue-secondary": "#4AD5FF",
        "blue-primary": "#339cd7",
        "blue-secondary": "#001236",
        "blue-tertiary": "#00337d",
        "orange-light": "#fad36f",
        "orange-light-secondary": "#f1ad42",
        "orange-dark": "#de7523",
        "grey-primary": "#757575",
        "grey-secondary": "#626262",
        "pastel-orange": "#f2e6ac",
        "pastel-white": "#EBFAFD",
        "pastel-purple": "#E7DEFC",
        "pastel-flesh": "#FFF3E0",
        "pastel-yellow": "#FFFDD5",
        "pastel-white-green": "#bbeee4",
        "pastel-blue": "#D4FFFF",
        "pastel-pink": "#FFE2E2",
        "pastel-lavender": "#c2d9ff",
        "pastel-gray": "#F3F5F7",
        "pastel-moss-green": "#E0EDE2",
      },
      boxShadow: {
        "base-button":
          "0px 4px 0px 0px #6bc349 inset, 0px -4px 0px 0px #2a631c inset, 0px 4px 0px 0px #00000040",
        "base-button-orange":
          "0px 4px 0px 0px #fce07e inset, 0px -4px 0px 0px #df8318 inset, 0px 4px 0px 0px #00000040",
        "base-button-orange-secondary":
          "0px 4px #fce07e inset, 0px -4px #d0750a inset, 4px 0px #df8318 inset, -4px 0px #ffbb54 inset, 0px 4px #0000001a inset",
        "base-button-gray":
          "0px 4px #9B9B9B inset, 0px -4px #626262 inset, 4px 0px #626262 inset, -4px 0px #9B9B9B inset, 0px 4px #0000001a inset",
        "hover-button-primary": "0px -2px #e7eaef inset, 0px 2px #8d8e92 inset",
        "hover-button-secondary": "0px 0px #fff inset,0px 0px #000",
        "hover-button-tertiary":
          "0px 4px #4d4d4d inset, 0px -4px #151515 inset, 4px 0px #151515 inset, -4px 0px #606060 inset, 0px 4px #0000001a inset",
        "hover-button-gray":
          "0px 4px #4d4d4d inset, 0px -4px #2A2A2A inset, 4px 0px #2A2A2A inset, -4px 0px #4d4d4d inset, 0px 4px #0000001a inset",
        "top-line": "0px -4px 0px 0px #d8d8d8, 0px 1px 0px 0px #00000040 inset",
      },
      keyframes: {
        drop: {
          "0%": { height: "0px" },
          "100%": { height: "172px" },
        },
      },
      animation: {
        drop: "drop 2s ease-in-out ",
      },
    },
  },
  plugins: [],
};
