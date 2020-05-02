const express = require('express');
const router = require('express').Router();
const Users = require('./user_model')
const knex = require('knex');
const authenticate = require('../auth/authenticate-middleware');

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