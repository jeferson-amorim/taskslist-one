(function(){
  'use strict';

  var Tasks = function ($resource) {

      var resource = $resource('/api/tasks/:buildId', {buildId:'@id'});

      return {
          find: function() {
              return resource.query();
          }
      };
  };

  angular.module('tasklist-one')
     .service('Tasks', ['$resource', Tasks]);

})();
