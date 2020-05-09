const {resolve} = require('path')

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'styles': resolve('src/assets/styles')
            }
				},
    }
}