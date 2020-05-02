const router = require('express').Router();

//import bcryptjs
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const secrets = require('../config/secrets')


//this allows us to look up joke data and them the database
const Users = require('../some path')

//extract the the user object from the 'req.body'
//hash the password with bcrypt and store in the user object
//hash format = [vers][cost][salt][hash]

router.post('/register', (req, res) => {
  // implement registration
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, 8);
  user.password = hash;

  User.add(user)
  .then(saved => {
    res.status(201).json(saved)
  })
  .catch(error => {
    res.status(500).json(error)
  })
});

router.post('/login', (req, res) => {
  // implement login
});

module.exports = router;
