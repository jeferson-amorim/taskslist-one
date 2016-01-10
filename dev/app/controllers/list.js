(function(){

  'use strict';

  var ListCtrl = function($scope, Tasks) {

      $scope.tasks = Tasks.find();
      $scope.selectedTask = {};

      $scope.toggleSelection = function(task)
      {
          if ( $scope.selectedTask.changelist !== task.changelist ) {
              $scope.selectedTask.selected = false;
          }

          task.selected = !task.selected;
          $scope.selectedTask = task;
      };

  };

  angular.module('tasklist-one')
     .controller('ListCtrl', ['$scope', 'Tasks', ListCtrl]);

})();
