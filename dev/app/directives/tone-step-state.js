/*jshint multistr: true */
(function(){

    'use strict';

    var toneStepState = function () {

        return {
            restrict: 'A',
            scope: {
                state: '=',
                progress: '=',
            },
            link: function(scope, element) {
                element.addClass('step-state');
            },
            template: '<div ng-style="{ \'width\': progress + \'%\' }"></div>'
        };
    };

  angular.module('tasklist-one')
     .directive('toneStepState', [toneStepState]);

})();
