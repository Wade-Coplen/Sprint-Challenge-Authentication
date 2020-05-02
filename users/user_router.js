const express = require('express');
const router = require('express').Router();
const Users = require('./user_model')
const knex = require('knex');
const authenticate = require('../auth/authenticate-middleware');

const admin_id = 20;

router.get('/', (req, res) => {
    Users.getAll()
    .then(users => {
        res.status(201).json(users)
    })
    })
router.get('/me', authenticate, (req, res) => {
    Users.findById(req.decodedJwt.id)
    .then(user => {
        delete user.password;
        res.status(201).json(user)
    })
})

router.put('/', authenticate, (req, res) => {
    if(req.body.password) {
        delete req.body.password;
    }
    Users.updateUser(id, req.body)
    .then((_) => Users.findById(id))
    .then((user) => {
        delete user.password;
        res.status(200).json(user)
    })
    .catch(err => {
        res.status(500).json({message: 'Unable to updated', error: err})
    })
  
})

router.get('/', (req, res) => {
    Users.find()
    .then(users => {
        res.json(users)
    })
    .catch(error => {
        res.send(error)
    })
})

module.exports = router;