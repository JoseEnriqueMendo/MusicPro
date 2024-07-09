export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { clashDisplay: ["Clash Display"], openSans: ["Open Sans"] },
      colors: {
        greenLime: "#B6FF52",
        white: "#FFFFFF",
        darkBlack: "#000000",
        darkPurple: "#162945",
      },
    },
  },
  plugins: [],
};
