const User = require('../../../models/User');

const express = require('express');
const router = express.Router();

router.use(function (req, res, next) {
  console.log('Hitting Users router');
  next();
})

router.post('/user/login', function (req, res) {
  res.status(200).send({ 'Route': 'router' });
});

module.exports = router;