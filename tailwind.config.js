module.exports = {
  mode:'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    extend: {
      colors: {
        primaryred: '#FF0000',
        primaryblue: '#001AFF',
        primarygray: '#D9D9D9',
        bgblack: '#0D1321',
        txtgreen: '#B8E2CB',
      },
    },
  },
  plugins: [],
};
