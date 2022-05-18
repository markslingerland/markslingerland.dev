module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? 'https://alexandramark.nl/'
    : 'http://localhost:8081/'
}