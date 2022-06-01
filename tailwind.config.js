module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        mainBg: 'hsl(233, 47%, 7%)',
        cardBg: 'hsl(244, 38%, 16%)',
        softViolet: 'hsl(277, 64%, 61%)',
        whiteCol: 'hsl(0, 0%, 100%)',
        transWhite: 'hsla(0, 0%, 100%, 0.75)',
        statsCol: 'hsla(0, 0%, 100%, 0.6)'
      }
    },
  },
  plugins: [require("daisyui")],
}
