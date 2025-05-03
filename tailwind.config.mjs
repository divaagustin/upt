/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',   // Menambahkan size 128 (32rem = 512px)
        '160': '40rem',   // Menambahkan size 160 (40rem = 640px)
        '192': '48rem',   // Menambahkan size 192 (48rem = 768px)
        '224': '56rem',   // Menambahkan size 224 (56rem = 896px)
        '256': '64rem',   // Menambahkan size 256 (64rem = 1024px)
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
