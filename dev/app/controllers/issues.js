(function(){

  'use strict';

  var IssuesCtrl = function($scope, $routeParams, Tasks) {
      $scope.task = Tasks.get($routeParams.changelist);
  };

  angular.module('tasklist-one')
     .controller('IssuesCtrl', ['$scope', '$routeParams', 'Tasks', IssuesCtrl]);

})();
