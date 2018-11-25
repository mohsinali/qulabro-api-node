const Service = require('../models/Service');

exports.index = (req, res) => {
  res.render('services/index', {
    title: 'Services'
  });
};

exports.new = (req, res) => {
  res.render('services/new', {
    title: 'Add new service'
  });
};