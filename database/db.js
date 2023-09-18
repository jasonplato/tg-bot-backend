const Sequelize = require('sequelize')

const db = {}
const sequelize = new Sequelize('game_db', 'root', '123456', {
	host: 'localhost',
	dialect: 'mysql',
	port: 33006,
	define: {
		freezeTableName: true,
	},

	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
})

db.sequelize = sequelize
// db.Sequelize = sequelize

module.exports = db
