const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const jwt = require('jsonwebtoken');


const authenticate = require('../auth/authenticate-middleware.js');

const userRouter = require('../users/user_router');
const authRouter = require('../auth/auth-router.js');


const jokesRouter = require('../jokes/jokes-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/users', authenticate, userRouter)
server.use('/auth', authRouter);
// server.use('/users', userRouter);

server.use('/jokes', authenticate, jokesRouter);

server.get('/token', (req, res) => {
    const payload = {
        subject: 'user',
        userId: 'jdoe',
        favoriteCar: 'VW'
    }
    const secret = 'lambdaschoolftw'

    const options = {
        expiresIn: '1h'
    }
    const token = jwt.sign(payload, secret, options)

    res.json(token)
})
server.get('/', (req, res) => {
    res.status(200).json({message: 'server is up'})
})
module.exports = server;
