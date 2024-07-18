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
        loadingColor: '#0C1C34',
      },
      keyframes: {
        'loading-animation': {
          '0%': { backgroundColor: '#0C1C34' },
          '100%': { backgroundColor: '#2060df' },
        },
      },
      animation: {
        loading: 'loading-animation 2s linear infinite alternate',
      },
    },
  },
  plugins: [],
};
