'use strict';

const getTasks = require('./../lib/queries/get-tasks'),
    getTaskById = require('./../lib/queries/get-task-by-id');

let tasks = function(app) {

  app.get('/api/tasks', function(req, res){
    getTasks
      .execute()
      .then(function(messages) {
        res.json(messages);
      });
  });

  app.get('/api/tasks/:id', function(req, res){
    getTaskById
      .execute(req.params.id)
      .then(function(builds) {
        res.json(builds);
      });
  });

};

module.exports = tasks;
