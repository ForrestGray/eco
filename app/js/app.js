'use strict';

/* App Module */

var designApp = angular.module('designApp', [
  'ngRoute',
  'designAnimations',
  'backNavigation',
  'navigation',
  'designControllers',
  'designFilters',
  'designServices'
]);

designApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/cover', {
        templateUrl: 'partials/cover.html',
        controller: 'CoverCtrl'
      }).
      when('/project', {
        templateUrl: 'partials/project.html',
        controller: 'ProjectCtrl'
      }).
      when('/marketing', {
        templateUrl: 'partials/marketing.html',
        controller: 'MarketingCtrl'
      }).
      when('/objectives', {
        templateUrl: 'partials/objectives.html',
        controller: 'ObjectivesCtrl'
      }).
      when('/stories', {
        templateUrl: 'partials/stories.html',
        controller: 'StoriesCtrl'
      }).
      when('/persona', {
        templateUrl: 'partials/persona.html',
        controller: 'PersonaCtrl'
      }).
      otherwise({
        redirectTo: '/cover'
      });
  }]);

