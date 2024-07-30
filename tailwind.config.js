export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: { clashDisplay: ['Clash Display'], openSans: ['Open Sans'] },
      colors: {
        greenLime: '#B6FF52',
        white: '#FFFFFF',
        darkBlack: '#000000',
        darkPurple: '#162945',
        lightPurple: '#1b345a',
        loadingColor: '#0C1C34',
      },
      keyframes: {
        'loading-animation': {
          '0%': { backgroundColor: '#0C1C34' },
          '100%': { backgroundColor: '#2060df' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-40%)' },
        },
      },
      animation: {
        loading: 'loading-animation 2s linear infinite alternate',
        marquee: 'marquee 8s linear infinite alternate',
      },
    },
  },
  plugins: [],
};
