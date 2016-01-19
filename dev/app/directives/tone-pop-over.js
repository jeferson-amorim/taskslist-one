/*jshint multistr: true */
(function(){

    'use strict';

    var tonePopOverControl = {
        popOvers: [],
        closeOpen: function() {
            angular.forEach(this.popOvers, function(popOver) {
              if ( popOver.showing ) {
                  popOver.showing = false;
                  popOver.$apply();
                  return;
              }
            });
        }
    };

    var tonePopOver = function ($compile) {

        var template = '<div ng-show="showing" class="tone-pop-over"><h6>{{header}}</h6><div class="tone-pop-over-body">{{body}}</div></div>';

        return {
            restrict: 'A',
            scope: {
                header: '=',
                body: '='
            },
            link: function(scope, element, attrs) {

                tonePopOverControl.popOvers.push(scope);

                scope.showing = false;

                var el = angular.element(template);
                $compile(el)(scope);
                element.append(el);
                element.css('position', 'relative');

                el.css({'left': (10 + element[0].offsetWidth) + 'px'});

                element.on('click', function(e) {

                    if ( e.stopPropagation ) e.stopPropagation();
                    if ( e.preventDefault ) e.preventDefault();

                    if ( ! scope.showing ) {
                        tonePopOverControl.closeOpen();
                    }

                    scope.showing = !scope.showing;
                    scope.$apply();
                });

            }
        };
    };

  angular.module('tasklist-one')
     .directive('tonePopOver', ['$compile', tonePopOver]);

})();
