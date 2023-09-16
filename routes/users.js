var express = require('express')
var router = express.Router()
const User = require('../model/User')

// Get  All Users
router.get('/', (req, res) => {
  res.json('hi')
})

router.get('/alluser', (req, res) => {
  User.findAll()
    .then(users => {
        res.json(users)
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

// Add apikey
router.post('/user', (req, res) => {
    console.log("get in server");
  if (!req.body) {
    res.status(404)
    res.json({
      error: 'Bad data'
    })
  } else {
    User.create(req.body)
      .then(() => {
        res.send('User Added')
      })
      .catch(err => {
        res.send('Error : ' + err)
      })
  }
})

// delete apikey
router.delete('/user/:id', (req, res) => {
  User.destroy({
    where: {
      _id: req.params.id
    }
  })
    .then((result) => {
      console.log(result)
      if (result == 1) {
        res.send('User Deleted!')
      } else {
        res.send('No user!')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

// Update apikey
router.put('/user', (req, res) => {
  console.log(req.body)
  if (typeof(req.body.user) == 'undefined' || typeof(req.body.status) == 'undefined') {
    res.status(400)
    res.json({
      error: 'Bad data'
    })
  } else {
    User.update({ _username: req.body.username }, { where: { _id: req.body.userid } })
      .then((reslut) => {
        console.log(reslut)
        if (reslut[0]==1) {
          res.send('User Update!')
        } else {
          res.send('No User!')
        }
        
      })
      .error(err => res.send(err))
  }
})

module.exports = router
