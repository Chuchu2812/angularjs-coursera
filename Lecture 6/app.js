
(function(){
'use strict';

angular.module("MsgApp", [])
.controller("MsgController",  MsgController );

MsgController.$inject = ['$scope'];
function MsgController($scope, $filter){
  $scope.name = "sara";
  $scope.message = "Sara is hungry";

    $scope.stateOfBeing = "hungry"

  $scope.feedMe = function(){
        $scope.stateOfBeing = "feed"
  };
}

})();
