/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Primary': '#28CB8B',
        'Secondary': '#263238',
        'Info': '#2194f3',

        'Shade1': '#43A046',
        'Shade2': '#388E3B',
        'Shade3': '#237D31',
        'Shade4': '#1B5E1F',
        'Shade5': '#103E13',

        'Tint1': '#66BB69',
        'Tint2': '#81C784',
        'Tint3': '#A5D6A7',
        'Tint4': '#C8E6C9',
        'Tint5': '#E8F5E9',

        'Warning': '#FBC02D',
        'Error': '#E53835',
        'Success': '#2E7D31',

        'Silver': '#F5F7FA',
      },
    
    },
  },
  plugins: [],
};
