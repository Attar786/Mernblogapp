// // import { Flowbite } from 'flowbite-react'
// const flowbite = require("flowbite-react/tailwind");
// {import('tailwindcss').Config}
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//     "flowbite.content()",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     flowbite.plugin()
//   ],
// }

// eslint-disable-next-line no-undef
const flowbite = require("flowbite-react/tailwind");
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(), // Invoke flowbite.content() function to include Flowbite content
  ],
  theme: {
    extend: {}, // Extend Tailwind CSS theme here if needed
  },
  plugins: [
    flowbite.plugin(), // Include Flowbite plugin
  ],
};
