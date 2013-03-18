function IngredientCtrl($scope) {
  // default content
  $scope.ingredients = [
    {name:'Avocado'}
  ];
  
  // add a new ingredient
  $scope.addIngredient = function() {
    $scope.ingredients.push({name:$scope.ingredientName});
    $scope.ingredientName = '';
  };
  
  // clear ingredient list
  $scope.clear = function() {
    $scope.ingredients = [];
  };
}