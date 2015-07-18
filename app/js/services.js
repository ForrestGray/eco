'use strict';

/* Services */

var designServices = angular.module('designServices', ['ngResource']);

designServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);
