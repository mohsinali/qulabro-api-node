const User = require('../../../models/User');
const bcrypt = require("bcrypt-nodejs");

const express = require('express');
const router = express.Router();

router.use(function (req, res, next) {
  next();
})

router.post('/user/login', async function (req, res) {
  user = await User.findOne({ email: req.body.email })
  if (user && bcrypt.compareSync(req.body.password, user.password)) {
    res.status(200).send({ 'msg': 'Loggedin successfully.' });
  } else {
    res.status(200).send({ 'msg': 'Invalid email/password.' });
  }
});

module.exports = router;