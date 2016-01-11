/* global angular */

(function () {

    'use strict';

    angular
        .module('tasklist-one', ['ngRoute','ngResource', 'ngAnimate', 'chart.js']);

    var appConfig = function ($routeProvider, $httpProvider, $locationProvider) {

        $httpProvider.interceptors.push(['$q', httpInterceptorErrorHandler]);

        $routeProvider
            .when('/', {
                templateUrl: 'app/views/list.html',
                controller: 'ListCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
    };

    angular
        .module('tasklist-one')
        .config(['$routeProvider', '$httpProvider', '$locationProvider', appConfig]);

})();
