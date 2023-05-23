/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      inset: {
        '128': '70%','785px': '785px','129': '10%','130': '39%','131': '33.8%','650px': '650px','132': '6%',
      },
      height: {
        '128': '450px','129': '500px',
      },
      margin: {
        '128': '70%',
      },
      width: {
        '128': '45%', '129': '10%','130': '65%','131': '250%','132': '80%',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        body : ['Stick No Bills'], aheng: ['Poppins']
      },
      opacity: {
        '1000': '10%',
      }
      
    },
  },
  plugins: [],
}
