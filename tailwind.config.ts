import type { Config } from "tailwindcss";

export default {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         colors: {
            primary: "#CEE34C",
            secondary: "#000000",
         },
         fontFamily: {
            instrumentSans: ["var(--font-instrument-sans)"],
         },
      },
   },
   plugins: [],
} satisfies Config;