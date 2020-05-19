const {resolve} = require('path')
const indexJson = require('./src/mock/index.json')
const cityJson = require('./src/mock/city.json')

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'styles': resolve('src/assets/styles')
            }
				},
				devServer: {
					before(app) {
						app.get('/api/index', (req, res) => {
							res.json(indexJson)
						})

						app.get('/api/city', (_, res) => {
							res.json(cityJson)
						})
					}
				}
    }
}