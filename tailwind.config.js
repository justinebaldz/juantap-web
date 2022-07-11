/** @type {import('tailwindcss').Config} */
module.exports = {
  // prefix: 'tw-',
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
  theme: { 
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
      },
      colors: {
        darkPrimary: '#193498',
        darkSecondary: '#113CFC',
        lightPrimary: '#1597E5',
        lightSecondary: '#69DADB', 
      },
      backgroundImage: {
        // 'header-bg': "url('/src/components/assets/home-profile-cover.png')", 
        // 'profile': "url('/src/components/assets/profile-pic.png')", 
      }

    }, 
  },
  plugins: [],
};