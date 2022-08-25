/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      flexGrow: {
        "2": 2
      },
      minHeight: {
        "body": "calc(100vh - 9rem)"
      },
      gridTemplateColumns: {
        "postsCards": "repeat(auto-fit, minmax(12rem, 1fr))",
        "big-postsCards": "repeat(auto-fit, minmax(17rem, 1fr))"
      },
      gridAutoRows: {
        "postsCards": "minmax(18rem, 25rem)"
      }
    },
  },
  plugins: [],
}
