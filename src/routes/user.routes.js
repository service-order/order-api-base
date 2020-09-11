'use strict';

const _express = require('express');
const userRouter = _express.Router();

const tokens = require('../configs/tokens/authentication.json');
const { authorize } = require('../middlewares/auth/jwt');

userRouter.get('/', authorize(tokens.TOKEN_AUTHORIZE), (req, res) => {
  res.send('user route');
});

userRouter.get('/:id', (req, res) => {
  res.send('user route id');
});

module.exports = userRouter;
