(function(){

  'use strict';

  var MergedBuildCtrl = function($scope, $routeParams, Tasks) {
      $scope.task = Tasks.get($routeParams.changelist);
  };

  angular.module('tasklist-one')
     .controller('MergedBuildCtrl', ['$scope', '$routeParams', 'Tasks', MergedBuildCtrl]);

})();
