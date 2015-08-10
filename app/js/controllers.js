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

designControllers.controller('MarketingCtrl', function ($scope, $http) {
  $http.get('data/marketing.json').success(function(data) {
    $scope.page = data;
  });
});

designControllers.controller('ObjectivesCtrl', function ($scope, $http) {
  $http.get('data/objectives.json').success(function(data) {
    $scope.page = data;
    
        $scope.select= function(item) {
       $scope.selected = item; 
    };

    $scope.itemClass = function(item) {
        return item === $scope.selected ? 'edit' : undefined;
    };


        $scope.addMore = function() {
        
        var objective = document.getElementById("objective").value;
        // Create a new object with whatever attributes you need 
        var element = {
            goal: objective
        }
        // Push it to the $scope.elements array
        // ng-repeat will loop through all the elements in the array 
        // It's just like foreach()
        $scope.page.objectives.push(element);
        
        // still need to clear previous field values for next run…
    }

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
        // still need to clear previous field values for next run…
    }

  });
});

designControllers.controller('PersonaCtrl', function ($scope, $http) {
  $http.get('data/persona.json').success(function(data) {
    $scope.page = data;
    
    $scope.select= function(item) {
       $scope.selected = item; 
    };

    $scope.itemClass = function(item) {
        return item === $scope.selected ? 'edit' : undefined;
    };

    
    var nextID = 2;

        $scope.addMore = function() {
        
        var name = document.getElementById("name").value;
        var age = document.getElementById("age").value;
        var education = document.getElementById("education").value;
        var occupation = document.getElementById("occupation").value;
        var persona = document.getElementById("persona").value;
        var scenario = document.getElementById("scenario").value;
        var goals = document.getElementById("goals").value;
        var teamSelected = document.getElementById("team").value;
        var picture = "./img/personas/" + nextID + ".jpg";
        nextID++;
        
       
       
      
        

        // Create a new object with whatever attributes you need 
        var element = {
           
            team: teamSelected,
            name: name,
            age: age,
            education: education,
            occupation: occupation,
            persona: persona,
            scenario: scenario,
            goals: goals,
            picture: picture
            
        }
        // Push it to the $scope.elements array
        // ng-repeat will loop through all the elements in the array 
        // It's just like foreach()
        $scope.page.personas.push(element);
        // still need to clear previous field values for next run…
        
    }

  });
});



