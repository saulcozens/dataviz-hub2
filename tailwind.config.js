// See https://tailwindcss.com/docs/configuration for details 
module.exports = {
  important: '#website',  //Make tailwind have highest specificity over other styling plugin (e.g. styled components)
  theme: {
    extend: {
      textColor: {
        'highlight': '#337ab7',
        'highlight_2': '#00aeef',
        'highlight_2t': '#73d8ff',
        'logo_blue': '#009fe3',
      },
      backgroundColor: {
        'footer': '#414042',
        'highlight_2': '#00aeef',
      },
      borderColor: {
        'highlight_2': '#00aeef',

      },
      screens: {
        'laptop': '1300px'
      },
      minHeight: {
        '90': '90vh',
        '100': '100vh',
      },
      maxHeight: {
        '12': '12vh',
      }

    },
 
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    borderColor: ['responsive', 'hover', 'group-hover'],
    borderWidth: ['responsive', 'hover', 'group-hover'],

  },
  plugins: [require("@tailwindcss/custom-forms")],
}
