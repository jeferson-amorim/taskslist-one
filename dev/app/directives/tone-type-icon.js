/*jshint multistr: true */
(function(){

    'use strict';

    var toneTypeIcon = function () {

        return {
            restrict: 'A',
            scope: {
                state: '=',
                type: '=',
            },
            link: function(scope, element) {

                var imageName = scope.type == 'firewall' ? 'firewall' : 'computer';
                var imageSrc = 'images/icon-' + scope.state + '-' + imageName + '.png';

                element.attr('src', imageSrc);
                element.attr('alt', 'icon');
            }
        };
    };

  angular.module('tasklist-one')
     .directive('toneTypeIcon', [toneTypeIcon]);

})();
