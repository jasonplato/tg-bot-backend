const db = require('./database/db')

var express = require('express')
var bodyParser = require('body-parser')

var users = require('./routes/users')
// var sessions = require('./routes/sessions')
// var mails = require('./routes/mails')
// var models = require('./routes/models')
var cors = require('cors')

var port = 3030

var app = express()
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api', users)
// app.use('/api', sessions)
// app.use('/api', mails)
// app.use('/api', models)

app.listen(port, async () => {
	console.log('Server started on port ' + port);
	await  db.sequelize.sync({ alter: true });
})
