module.exports = {
  async rewrites() {
    return [
      {
        source: '/graphql',
        destination: 'http://localhost:4000/graphql' // Proxy to Backend
      }
    ]
  }
}