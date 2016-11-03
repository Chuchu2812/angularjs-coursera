/*(function(){
'use strict';

angular.module("DIApp", [])
.controller("DIController", ['$scope', '$filter', DIController, function($scope, $filter){
  $scope.name = "sara";

  $scope.upper = function(){
    var upperCase = $filter('uppercase');
    $scope.name = upperCase($scope.name);
  };
}] );

})();
*/

//!function(){"use strict";function n(n,e,r){n.name="sara",n.upper=function(){var r=e("uppercase");n.name=r(n.name)}}angular.module("DIApp",[]).controller("DIController",n)}();

//!function(){"use strict";function e(e,n,r){e.name="sara",e.upper=function(){var r=n("uppercase");e.name=r(e.name)}}angular.module("DIApp",[]).controller("DIController",["$scope","$filter",e])}();

(function(){
'use strict';

angular.module("DIApp", [])
.controller("DIController",  DIController );

DIController.$inject = ['$scope', '$filter'];
function DIController($scope, $filter){
  $scope.name = "sara";

  $scope.upper = function(){
    var upperCase = $filter('uppercase');
    $scope.name = upperCase($scope.name);
  };
}

})();
//!function(){"use strict";function e(e,n){e.name="sara",e.upper=function(){var r=n("uppercase");e.name=r(e.name)}}angular.module("DIApp",[]).controller("DIController",e),e.$inject=["$scope","$filter"]}();
