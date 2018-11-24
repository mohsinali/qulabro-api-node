const User = require('../models/User');

/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('tasks', {
    title: 'Tasks'
  });
};

exports.seed = async (req, res) => {
  await User.deleteMany({});
  var user = new User({ email: 'admin@qb.com', password: '321321321' })
  user.save(function (err, user) {
    if (err) {
      console.errr(err);
    }
  })
  res.status(200).send({ 'reply': 'Hello' });
}