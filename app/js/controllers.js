'use strict';

/* Controllers */

var designControllers = angular.module('designControllers', []);

designControllers.controller('CoverCtrl', function ($scope, $http) {
  $http.get('data/cover.json').success(function(data) {
    $scope.page = data;
  });
});

designControllers.controller('ProjectCtrl', function ($scope, $http) {
  $http.get('data/project.json').success(function(data) {
    $scope.page = data;
  });
});

designControllers.controller('StoriesCtrl', function ($scope, $http) {
  $http.get('data/stories.json').success(function(data) {
    $scope.page = data;
    
        $scope.addMore = function() {
        
        var userSelected = document.getElementById("user").value;
        var teamSelected = document.getElementById("team").value;
        var feature = document.getElementById("feature").value;
        var benefit = document.getElementById("reason").value;

        // Create a new object with whatever attributes you need 
        var element = {
            user: userSelected,
            team: teamSelected,
            feature: feature,
            benefit: benefit
        }
        // Push it to the $scope.elements array
        // ng-repeat will loop through all the elements in the array 
        // It's just like foreach()
        $scope.page.stories.push(element);
    }

  });
});

designControllers.controller('PersonaCtrl', function ($scope, $http) {
  $http.get('data/persona.json').success(function(data) {
    $scope.page = data;
  });
});



