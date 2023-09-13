/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        custom: '340px',
      },
    },
   colors: {
    background: '#312E38',
    textColor: '#FF859B',
    GRAY_100: '#CAC4CF',
    WHITE: '#F4EDE8',
    GRAY_300: '#262529',
    },
    
  },
  plugins: [],
}

