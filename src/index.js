const app = require('./app')

const main = () => {
  app.listen(5000)
  console.log('Server is running')
}

main()

module.exports = {
  main
}
