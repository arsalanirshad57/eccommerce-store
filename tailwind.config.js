/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {
      colors: {
        'gray-1': "#F2F0F1",
        'gray-2': "#F0F0F0",
        'gray-3': '#F0EEED',
        'para': "rgb(0, 0, 0, 75%)",
        'custom_black': "rgb(0, 0, 0, 10%)"
      },
      fontFamily: {
        'cf': ['var(--font-cf)', 'sens-serif'],
        'stoshi': ['var(--font-stoshi)', 'sens-serif'],
      },
      fontSize: {
        '40fs': '40px',
        '15fs': '15px',
      },
      lineHeight: {
        '60lh': "60px",
      },
      width: {
        '550wd': '550px',
        '570wd': '570px',
        '450wd': '450px',
        '45pr': '45%',
      },
      screens: {
        'min-550': '550px',
        'min-400': '400px',
        'min-350': '350px'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
