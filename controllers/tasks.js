/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('tasks', {
    title: 'Tasks'
  });
};
