describe('List Controller Test', function() {

    beforeEach(module('tasklist-one'));

    describe('ToggleSelection test', function() {

        var scope = {}, location = {}, Tasks = {}, task = {};

        beforeEach(function(){
           Tasks                = { find: function() { }, get: function() { return { then: function(call) { call() }}} },
           task.selected        = false;
       });

        it('when task is pending, cant change selected state', inject(function($controller) {
              $controller('ListCtrl', {$scope: scope, $location: location, Tasks: Tasks});
              task.state = 'pending';
              scope.toggleSelection(task);
              expect(task.selected).toBe(false);
        }));

        it('when task is running, cant change selected state', inject(function($controller) {
              $controller('ListCtrl', {$scope: scope, $location: location, Tasks: Tasks});
              task.state = 'running';
              scope.toggleSelection(task);
              expect(task.selected).toBe(false);
        }));

        it('when task is complete, should change selected state', inject(function($controller) {
              $controller('ListCtrl', {$scope: scope, $location: location, Tasks: Tasks});
              task.state = 'complete';
              scope.toggleSelection(task);
              expect(task.selected).toBe(true);
        }));

        it('when task is accepted, should change selected state', inject(function($controller) {
              $controller('ListCtrl', {$scope: scope, $location: location, Tasks: Tasks});
              task.state = 'accepted';
              scope.toggleSelection(task);
              expect(task.selected).toBe(true);
        }));

        it('when task is rejected, should change selected state', inject(function($controller) {
              $controller('ListCtrl', {$scope: scope, $location: location, Tasks: Tasks});
              task.state = 'accepted';
              scope.toggleSelection(task);
              expect(task.selected).toBe(true);
        }));

        it('when task selected state is true, should change to false', inject(function($controller) {
              $controller('ListCtrl', {$scope: scope, $location: location, Tasks: Tasks});
              task.state = 'accepted';
              task.selected = true;
              scope.toggleSelection(task);
              expect(task.selected).toBe(false);
        }));

        it('when has another task selected, should unselect it', inject(function($controller) {
              $controller('ListCtrl', {$scope: scope, $location: location, Tasks: Tasks});
              scope.selectedTask.selected = true;
              task.state = 'accepted';
              task.selected = true;
              scope.toggleSelection(task);
              expect(scope.selectedTask.selected).toBe(false);
        }));

        it('when task is selected, selectedTask should be equals to task', inject(function($controller) {
              $controller('ListCtrl', {$scope: scope, $location: location, Tasks: Tasks});
              scope.selectedTask = {};
              task.state = 'accepted';
              task.selected = true;
              scope.toggleSelection(task);
              expect(scope.selectedTask).toBe(task);
        }));

    });

});
