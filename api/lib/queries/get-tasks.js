'use strict';

const Q = require('q'),
  Task = require('./../models/task');

let getTasks = {

      'execute': function () {

          let defered = Q.defer();
          Task.find(function (err, data) {
                  if (err) return defered.reject(err);
                  defered.resolve(data);
              });

          return defered.promise;
      }
};

module.exports = getTasks;
