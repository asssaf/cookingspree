function IngredientCtrl($scope) {
  // default content
  $scope.ingredients = [
    {name:'Avocado', selected:true}
  ];
  
  // add a new ingredient
  $scope.addIngredient = function() {
    $scope.ingredients.push({name:$scope.ingredientName, selected:true});
    $scope.ingredientName = '';
  };
  
  // clear ingredient list
  $scope.clear = function() {
    $scope.ingredients = [];
  };
 
  $scope.findPairs = function() {
    var pairs = [];
    var ings = $scope.ingredients;
    
    for (i = 0; i < ings.length; ++i) {
      if (ings[i].selected) {
	for (j = i + 1; j < ings.length; ++j) {
	  if (ings[j].selected) {
	    pairs.push([ ings[i].name, ings[j].name ]);
	  }
	}
      }
    }
    
    return pairs;
  };
  
  $scope.searchUrl = function() {
    var query = ""
    angular.forEach($scope.ingredients, function(ingredient) {
      if (ingredient.selected) {
	query += ingredient.name + "+";
      }
    });
    return "http://www.google.com/search?q=" + query;
  };
}