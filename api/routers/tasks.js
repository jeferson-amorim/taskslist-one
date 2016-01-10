'use strict';

const getTasks = require('./../lib/queries/get-tasks');

let tasks = function(app) {

  app.get('/api/tasks', function(req, res){
    getTasks
      .execute()
      .then(function(messages) {
        res.json(messages);
      });
  });

};

module.exports = tasks;
