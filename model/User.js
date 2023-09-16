const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
	'users',
	{
		_id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		_username: {
			type: Sequelize.STRING
		},
		_time: {
			type: Sequelize.DATE
		}
	},
	{
		timestamp: false
	}
)
