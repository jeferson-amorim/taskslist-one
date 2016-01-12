'use strict';

const Q = require('q'),
  Task = require('./../models/task');

let getTaskById = {

      'execute': function (id) {

          let defered = Q.defer();
          Task.get(id, function (err, data) {
              if (err) return defered.reject(err);
              defered.resolve(data);
          });

          return defered.promise;
      }
};

module.exports = getTaskById;
