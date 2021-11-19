const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['Barlow'],
        main: ['Fraunces']
      },
      colors: {
        bg_footer: "hsl(168, 52%, 70%)",
        photo_text: "hsl(198, 62%, 26%)",
        footer_title_color: "hsl(167, 40%, 24%)",
        title_text_color: "hsl(212, 27%, 19%)",
        dark_grey: "hsl(213, 9%, 39%)",
        text_color: "hsl(210, 4%, 67%)",
        footer_nav_color: "hsl(168, 34%, 41%)",
      }
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
