/*jshint multistr: true */
(function(){

    'use strict';

    var toneTestsResult = function ($timeout) {

        var pieDiameter = 92;

        var customTooltips = function(tooltip) {

                // Hide if no tooltip
                if (!tooltip) {
                    return;
                }

                var info = {
                  label: tooltip.text.split(':')[0],
                  text: tooltip.text.split(':')[1]
                };

                function getElement(label) {

                    var element;
                    var parent = angular.element(tooltip.chart.canvas.parentElement);
                    var elements = parent.find('div');

                    for(var i=0;i<elements.length;i++) {
                        var el = angular.element(elements[i]);
                        if ( el.hasClass(label) ){
                            element = el;
                            return;
                        }
                    }

                    if ( ! element ) {
                        element = angular.element('<div></div>');
                        element.addClass(label);
                        parent.append(element);
                    }

                    return element;
                }

                // Tooltip Element
                var tooltipEl = getElement(info.label);

                tooltipEl.addClass('tooltip');

                // Set Text
                tooltipEl.html(info.text);

                // Display, position, and set styles for font
                tooltipEl.css({
                    opacity: 1,
                    left: tooltip.x - (tooltipEl[0].offsetWidth / 2 ) + 'px',
                    top: tooltip.y - (tooltipEl[0].offsetHeight / 2 ) + 'px',
                });
        };

        return {
            restrict: 'E',
            scope: {
                results: '='
            },
            link: function(scope, element) {

                scope.chartOptions = {
                    tooltipEvents: [],
                    showTooltips: true,
                    tooltipFillColor: "rgba(0,0,0,0)",
                    tooltipFontColor: "#000000",
                    customTooltips: customTooltips,
                    onAnimationComplete: function () {
                        this.showTooltip(this.segments, true);
                    }
                };

                scope.codeCoveredPerc = 0;

                scope.labels = ["skiped","passed"];
                scope.colors = ["#eb7d3b", "#72ac4d"];

                scope.data = [scope.results.skiped, scope.results.passed];

                scope.getCodeCoveredPerc = function() {
                    return (scope.results.codeCovered * 100) + '%';
                };

                scope.getPassedPerc = function ()
                {
                    var total = scope.results.skiped + scope.results.passed;
                    return Math.round(scope.results.passed/total * 100) + '%';
                };

                $timeout(function() {
                    scope.codeCoveredPerc = scope.getCodeCoveredPerc();
                    element.addClass('tone-loaded');
                });

            },
            template: '<canvas id="pie" height="' + pieDiameter + '" width="' + pieDiameter + '" class="chart chart-pie" \
              chart-data="data" chart-options="chartOptions" chart-labels="labels" chart-colours="colors"> \
            </canvas> \
            <div class="perc"> \
                {{getPassedPerc()}} \
                <span>tests passed</span> \
            </div> \
            <div class="bar"> \
                <div class="progress" ng-style="{ width: codeCoveredPerc }"></div> \
                <div class="content">{{getCodeCoveredPerc() }}<span>code covered</span></div> \
            </div>'
        };
    };

  angular.module('tasklist-one')
     .directive('toneTestsResult', ['$timeout', toneTestsResult]);

})();
