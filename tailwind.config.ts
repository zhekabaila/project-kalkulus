import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        secondary: '#e9e9f2',
        primary: '#3b82f6',
        moon: '#2c2e30',
        jeruk: '#FF6600',
        sun: '#F5F5F5',
        shadow: '#1D1F21',
      },
    },
  },
  plugins: [],
}
export default config
