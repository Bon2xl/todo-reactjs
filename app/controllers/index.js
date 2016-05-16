var express = require('express');
    router = express.Router(),
    mongoose = require('mongoose'),
    ToDo = mongoose.model('ToDo'),
    Article = mongoose.model('Article');

module.exports = function (app) {
  app.use('/', router);
};


router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'TODO APP'
  });
});

// New or update todo
router.post('/api/todo/', function (req, res, next) {
  console.log();
  var todo = new ToDo(req.body);
  todo.save(function (err) {
    if(err) return next(err);
    todo.save();
  })
});

