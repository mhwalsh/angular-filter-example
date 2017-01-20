var testFilter = angular.module('testFilter', []);
/*
Filter to add an exclamation mark to the end of things!
*/
testFilter.filter('excited', function() {
  return function(name) {
    return name + '!';
  };
});

/*
Filter things out that contain Ms. No Ms fool.
*/
testFilter.filter('noMs', function() {
  return function(name) {
    if(name.includes('M') || name.includes('m')){
      return 'No Letter Ms fool';
    }else{
      return name;
    }
  };
});

testFilter.controller('main', function($scope, $http) {
  $scope.people = ["Millie", "John", "Ashlen", "Lauren", "John", "Ryan", "Mr.Mmmmm"];
});
