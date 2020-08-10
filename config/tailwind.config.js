module.exports = {
  purge: [
    './config/**/*.html',
    './config/**/*.jsx',
    './features/**/*.jsx'
  ],
  theme: {},
  variants: {},
  plugins: [
    require('@tailwindcss/ui')
  ],
}
