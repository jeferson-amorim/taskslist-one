/*jshint multistr: true */
(function(){

    'use strict';

    var toneMetricBox = function () {

        var directions = {
            'test'              : ' up',
            'maintainability'   : ' up',
            'security'          : ' right',
            'workmanship'          : ' right'
        };

        return {
            restrict: 'A',
            scope: {
                type: '=',
                length: '=',
            },
            link: function(scope, element) {
                var className = scope.type.toLowerCase();
                var direction = directions[className];
                element.addClass("metric-box " + className + direction);
            },
            template: '<span class="number">{{length}}</span> \
            <span class="description">{{type}}</span>'
        };
    };

  angular.module('tasklist-one')
     .directive('toneMetricBox', [toneMetricBox]);

})();
