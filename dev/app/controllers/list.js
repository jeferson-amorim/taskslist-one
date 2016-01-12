(function(){

  'use strict';

  var ListCtrl = function($scope, $location, Tasks) {

      $scope.deployOptions = ['Production', 'Homolog'];
      $scope.deployTarget = $scope.deployOptions[0];

      $scope.tasks = Tasks.find();
      $scope.selectedTask = {};

      $scope.toggleSelection = function(task)
      {
          if ( task.state === 'pending' || task.state === 'running') {
              return;
          }

          if ( $scope.selectedTask.changelist !== task.changelist ) {
              $scope.selectedTask.selected = false;
          }

          task.selected = !task.selected;
          $scope.selectedTask = task;
      };

      $scope.showIssue = function(changelist) {
          $location.path('/issues/' + changelist );
      };

      $scope.showMergedBuild = function(changelist) {
          $location.path('/merged-build/' + changelist );
      };

  };

  angular.module('tasklist-one')
     .controller('ListCtrl', ['$scope', '$location', 'Tasks', ListCtrl]);

})();
