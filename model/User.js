const { Sequelize, DataTypes} = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
	'users',
	{
		tg_id: {
			type: DataTypes.STRING,
			primaryKey: true,
			allowNull: false
		},
		tg_name: {
			type: DataTypes.STRING
		},
		wallet_connected: {
			type: DataTypes.BOOLEAN
		},
		wallet_addr: {
			type: DataTypes.STRING
		},
	},
	{
		timestamp: true
	}
)
