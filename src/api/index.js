const express = require('express');
const errorHandler = require('../middleware');

// Models
const { Question } = require('../models/questions');
const { Answer } = require('../models/answers');

// Controllers
const questions = require('../controllers/questions');

// Combine models
const models = { Question };

const routersInit = config => {
  const router = express();

  // Register API endpoints
  router.use('/questions', questions(models, { config }));

  // catch api all errors
  router.use(errorHandler);
  return router;
};

modules.export = routersInit;