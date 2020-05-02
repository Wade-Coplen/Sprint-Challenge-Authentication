const router = require('express').Router();

//import bcryptjs
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const secrets = require('../config/secrets')


//this allows us to look up joke data and them the database
const Users = require('../users/user_model')

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
  let {username, password} = req.body;
  Users.findBy({username})
  .first()
  .then(user => {
    if(user && bcrypt.compareSync(password, user.password)) {
      const token = genToken(user);
      //This is a success message to the user which includes a token
      res.status(200).json({message: `Weclome ${user.name}!`, token})
    } else {
      res.status(401).json({message: 'Invalid credentials!'});
    }
  })
  .catch(error => {
    res.status(500).json(error)
  })
});
function genToken(user) {
  const payload = {
    userid: user.id,
    username: user.username
  }
  const options = {
    expiresIn: '1h'
  }
  const token = jwt.sign(payload, secrets.jwtSecret, options)
  return token;
}

module.exports = router;
