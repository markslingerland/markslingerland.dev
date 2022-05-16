module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? 'https://markslingerland.dev/'
    : 'http://localhost:8081/'
}