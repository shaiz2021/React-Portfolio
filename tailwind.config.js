/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'roboto': "'Roboto','sans-serif'"
    },
    extend: {
      colors: {
        'primary': '#5E3BEE',
        'headingColor': '#282938',
        'bgShade': '#E9F8FF',
        'dribble': '#E62872',
        'body': '#1C1E53'
      },
      // keyframes: {
      //   slidein: {
      //     from: {
      //       opacity: "0",
      //       transform: "translateY(-10px)",
      //     },
      //     to: {
      //       opacity: "1",
      //       transform: "translateY(0px)",
      //     },
      //   },
      // },
      // animation: {
      //   slidein: "slidein 1.5s ease 300ms",
      // },
      animation: {
        "text-reveal": "text-reveal 1s cubic-bezier(0.77, 0, 0.175, 1) 0.3s",
      },
      keyframes: {
        "text-reveal": {
          "0%": {
            transform: "translate(0, 100%)",
          },
          "100%": {
            transform: "translate(0, 0)",
          },
        },
      },

    },
  },
  plugins: [],
}

