/** @type {import('tailwindcss').Config} */
export default{
  content : ["./index.html","./src/**/*.{js,ts,jsx,tsx"],
  theme : {
   fontFamily: {
     Poppins: "Poppins"
   },
   extend: {
     colors: {
       Teal: "#2F6C6D",
       HummingBird: "#d1f1ee",
       yellow: "#e4d63b",
       Solitude: "#e9e9ea",
       gray: "#4B4b4C"
     },
     animation: {
       slide: "slide 25s linear infinite"
     },
     keyframes: {
       slide: {
         "0%,100%": { transform: "translateX(5%)" },
         "50%": { transform: "translateX(-120%)" }
       }
     }
   },
   screens: {
     xs: "480px",
     sm: "720px",
     md: "1060px"
   }
 },
 plugins = [];
}