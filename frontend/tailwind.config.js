// tailwind.config.js
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx,vue,svelte}",
    ],
    theme: {
      extend: {
        fontFamily: {
          aldrich: ['Aldrich', 'sans-serif'],
          ibm: ['"IBM Plex Sans"', 'sans-serif'],
          recursive: ['Recursive', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };
  