const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  purge: {
    enabled: true,
    content: ['./*.html'],

  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'umbrellacareer': "url('/images/finalumbrella.png')",
        'umbrellares': "url('/images/finalumbrellares.png')",
        'umbre': "url('/images/mobile_umbrella.png')",
        'hero': "url('/images/umbrella_final.jpg')",
        'hero-pattern': "url('/images/Vector.svg')",
        'mobile': "url('/images/mob-land.png')",
        'stepper': "url('/images/line_1.png')",
        'client': "url('/images/mob_frame.png')",
        'booking': "url('/images/design2.png')",
        'mobdesign': "url('/images/design1.png')",
        'umbrella': "url('/images/umbrellares.png')",
        'colorimg': "url('/images/navigationres.png')",
      }),
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#0570fc',
        'secondary': '#031a6b',
        'iconcolor': '#f0d5fd',
        'danger': '#1b1f3b',
        'dow': '#f5f5ff',
        'cleaning': '#f3f3f3',
        'Appliances': '#bed0ff',
        'Electri': '#f3a6a6',
        'Painters': '#ece3e3',
        'Pest': '#c8c3ff',
        'Carpen': '#c2f5b0',
        'Garde': '#acdbfd',
        'plumber': '#f4f0a4',
        'light': '#0b036b',
        'btnpopup': '#1d1d1d',
        'popuplist': '#efefef',
        'one': '#abfffa',
        'two': '#d0abff',
        'third': '#ffabc4',
        'orange': '#FFA500',
        'arrow': '#1a1732',
        'partner': '#f9f9f9',
        'gray': '#0f0f0f',
        'lightblack': '#2d2d2d',
        'maroon': '#a5032c',
        'marrongray': '#421e27',
      }),
      gradientColorStops: theme => ({
        ...theme('colors'),
        'primary': '#0570fc',
        'secondary': '#031a6b',
        'aaaaa': '#4A4645',
        'bbbbb': '#494342',
        'maroon': '#a5032c',
        'marrongray': '#421e27',

      }),
      textColor: theme => theme('colors'),
      textColor: {
        red: {
          light: '#ffdfdf',
          smlight: '#ff4646',
          dark: '#ff0000',
        },
        blue: {
          dark: '#031a6b',
          default: '#0570fc',

        },
        // marron: {
        //   dark: '#a5032c',
        // },
        green: {
          dark: '#34b407',
        },
        orange: {
          dark: '#FFA500',
        },
        gray: {
          dark: '#e5e5e5',
          default: '#fffcdf',
          light: '#031a6b',
          lightgray: '#7a7a7a',
          rating: '#bdbdbd',
          check: '#4d4d4d',
          client: '#e9e5ff',
          black: '#000000',
          faq: '#666666',
          lightblack: '#3e3d3d',
          name: '#9a9a9a',
          popup: '#363636',
          listcol: '#595959',
          popuptex: '#b2b2b2',
          pophead: '#3c3c3c',
          works: '#656565',
          star: '#3e4750',
          sidenav: '#c5c5c6',
          lite: '#8c8c8c',
          maroon: '#a5032c',
          heablack: '#393939',



        },
      },
      width: (theme) => ({
        auto: 'auto',
        ...theme('spacing'),
        '1/2-n': '47%',
        '1/2-d': '44%',
        '1/2-f': '43%',
        '1/2-s': '39%',
        '1/2-m': '45%',
        21: '29rem',
        22: '27.75rem',
        29:'9.75rem',


      }),
      borderColor: (theme) => ({
        ...theme('colors'),
        'line': '#dfdfdf',
        'nav': '#dbdbdb',
        'faq': '#cbd6e2',
        'popup': '#f4f4f4',
        'popline': '#0570fc',
        'dark': '#031a6b',
      }),
      fontFamily: {
        heading: ['"Josefin Sans"'],
        subheading: ['Roboto'],

      },
      fontSize: {
        lg: ['1.125rem', { lineHeight: '1.875rem' }],
        sm: ['0.875rem', { lineHeight: '1.562rem' }],
        xs: ['0.75rem', { lineHeight: '1.25rem' }],
        'xs-s': ['0.875rem', { lineHeight: '1.25rem' }],
        'xs-b': ['0.375rem', { lineHeight: '1.875rem' }],
        'xs-n': ['1.125rem', { lineHeight: '0.875rem' }],
        'xm-n': ['0.625rem', { lineHeight: '1.125rem' }],
        'sm-n': ['0.93rem', { lineHeight: '1.562rem' }],
        'sm-p': ['0.93rem'],
        'sm-a': ['0.75rem'],
        'sm-b': ['1.75rem'],
        'sm-e': ['0.625rem'],
        'sm-c': ['1.5rem', { lineHeight: '1.875rem' }],
        'sm-w': ['1.5rem', { lineHeight: '1.562rem' }],
        'sm-s': ['1rem', { lineHeight: '1.875rem' }],
        'sm-f': ['1rem', { lineHeight: '1.562rem' }],
        'sm-l': ['1rem', { lineHeight: '1.375rem' }],
        'lg-n': ['1.125rem', { lineHeight: '1.562rem' }],
        'lg-f': ['1.875rem', { lineHeight: '1.875rem' }],
        'xl-n': ['1.25rem', { lineHeight: '1.562rem' }],
        'xl-s': ['1.25rem', { lineHeight: '1.875rem' }],
        'lg-c': ['1.5625rem'],
        'lg-b': ['1.25rem'],
        'lg-s': ['1.5rem'],
        'lg-x': ['1rem'],
        'lg-k': ['0.812rem'],
        '3xl-n': ['2.5rem', { lineHeight: '3.125rem' }],
        '3xl-s': ['2rem'],
        '3xl-w': ['2.5rem', { lineHeight: '1.562rem' }],
        '3xl-o': ['1.875rem', { lineHeight: '3.125rem' }],
        '3xl-f': ['1.875rem', { lineHeight: '1.562rem' }],
        '2xl-n': ['1.562rem', { lineHeight: '1.875rem' }],
        '4xl-n': ['3.75rem', { lineHeight: '1.562rem' }],
      },
      fontWeight: {
        'thin-n': '900',

      },
      margin: {
        '73': '4.5rem',
        '74': '17rem',


      },
      boxShadow: {
        'xl-n': ' 0 4px 30px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
      },


      gridTemplateRows: {
        6: 'repeat(9, minmax(0, 3vw))',
        5: 'repeat(13, minmax(0, 8vw))',
      },
      letterSpacing: {
        'widest-n': '0.625rem',
        'wide': '0.75rem',
      },
      variantOrder: [
        'hover',
        'active',
      ],
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      inset: {
        '19': '32rem',

      },
      maxWidth: (theme, { breakpoints }) => ({
        'xl-w': '28.125rem',
        'xl-s': '27.5rem',
        'xl-d': '29.125rem',
        'xl-a': '4.75rem',
        'xl-b': '12.5rem',
        '3xl-s': '29.687rem',
        '3xl-a': '27.75rem',
        '3xl-l': '20.18rem',
        '3xl-n': '22.75rem',
        '4xl-a': '31.25rem',
        '4xl-h': '25.625rem',
        '4xl-p': '55.5rem',
        '4xl-s': '50rem',
        '5xl': '40rem',
        '5xl-n': '29.31rem',
        '2xl-n': '23.06rem',
        '2xl-s': '21.06rem',
        '2xl-x': '25rem',
        '2xl-b': '21.25rem',
        '2xl-f': '15.25rem',
        '5xl-n': '29rem',
        '6xl': '34.375rem',
        '6xl-n': '47.625rem',





        ...breakpoints(theme('screens')),
      }),
      maxHeight: (theme) => ({
        ...theme('spacing'),
        'xl-b': '3.75rem',
        'xl-s': '25rem',

      }),
      borderRadius: {
        'md-g': '0.3125rem',
        'md-i': '0.937rem',
        'md-f': '0.625rem',
        'md-i': '1.25rem',
        'md-b': '0.125rem',

      },
      borderWidth: {
        DEFAULT: '1px',
        0: '0px',
        2: '1px',
        5: '2px',
        4: '4px',
        8: '8px',
      },
      spacing: {
        13: '3.75rem',
        15: '4.5rem',
        17: '7.5rem',
        75: '10.5rem',
        84: '30rem',
        83: '22rem',
        18: '6.9rem',
        23: '7.9rem'




      },

      height: {
        '0.7': '70.875rem',

      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'hover'],
      transitionProperty: ['responsive', 'motion-safe', 'motion-reduce'],
      transitionDelay: ['responsive'],
      transitionDuration: ['responsive'],
      transitionProperty: ['responsive'],
      transitionTimingFunction: ['responsive'],
      transitionDuration: ['hover', 'focus'],
      transitionDelay: ['hover', 'focus'],

    },
  },
  plugins: [],
}
// "build": "echo \"Success: no build needed\" && exit 0",
