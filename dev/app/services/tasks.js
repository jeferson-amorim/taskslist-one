(function(){
  'use strict';

  var Tasks = function ($resource, $timeout) {

      var resource = $resource('/api/tasks/:changelistId', {buildId:'@id'});

      var tasks = [];

      var map = function(_from, to) {
          angular.forEach(_from, function(value, key){
             to[key] = value;
         });
      };

      // TaskMonitor to listen updates on pending and running tasks
      // websockets isnt alternative because ie8 doesn't support it
      var TaskMonitor = function(task) {

          var self = this;

          this.task = task;

          this.verify = function()
          {
              resource.get({changelistId:self.task.changelist})
                .$promise.then(function(resp){
                    angular.forEach(tasks, function(task) {
                        if ( task.changelist == resp.changelist ) {
                            map(resp, task);
                            if ( task.state === 'pending' || task.state === 'running') {
                                self.wait();
                            }
                        }
                    });
                });
          };

          this.wait = function() {
              $timeout(self.verify, 500);
          };

          this.wait();
      };

      return {
          find: function() {

               //I couldn't use websockets because ie8 doesn't support it
              if ( tasks.length === 0 ) {
                  resource.query()
                    .$promise.then(function(resp) {
                        angular.forEach(resp, function(task) {
                            if ( task.state === 'pending' || task.state === 'running' ) {
                                new TaskMonitor(task);
                            }
                            tasks.push(task);
                        });
                    });
              }

              return tasks;
          },
          get: function(id) {
              return resource.get({changelistId:id});
          }
      };
  };

  angular.module('tasklist-one')
     .service('Tasks', ['$resource', '$timeout', Tasks]);

})();
