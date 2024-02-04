import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'btn-green':'#23402f',
        'icons-green': '#00d779',
        'background' : '#fffffff2',
        'btn-green-variation': '#eff5ee',
        'icon-green-variation': '#244f2f',
      }
    },
  },
  plugins: [],
}
export default config;
