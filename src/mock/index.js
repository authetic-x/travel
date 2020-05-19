const Mock = require('mockjs')
const util = require('./util')

Mock.mock(/\/api\/index/, 'get', getIndexData)

function getIndexData () {
	const res = util.getJsonFile('index.json')
	console.log(res)
	return res
}
