/*
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/products'
      }
    ]
  }
}
*/

module.exports = {
  reactStrictMode: true,
  env: {
    URL: 'http://localhost/sistemaauditoria/saauditoriaI/public/',
  }
}