(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function($scope){

  $scope.name = 'Sara';
  $scope.changeName = 'Abg Group';

  $scope.myfunction = function(){
    return 'Welcome to Coursera';
  }
});

})();
