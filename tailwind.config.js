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
  plugins: [
    require("tailwind-heropatterns")({
      // as per tailwind docs you can pass variants
      variants: [],
    
      // Site for patterns: https://heropatterns.com/
      // Git for debugging and whatnot i guess i don't really know 
      // at this point man I guess I just have it 
      // here: https://github.com/AndreaMinato/tailwind-heropatterns
      
      // an empty array will generate all the patterns I think but
      // but I wanna be smart so I am just importing what I want
      patterns: ["topography"],
    
      // Can add more colors for further customiation but I dont wanna
      colors: {
        default: "#FFFFFF",
      },
    
      // Can add more opacity if needed or custom amounts or sumn
      opacity: {
        default: "0.1",
      }
    }),
  ],
};
