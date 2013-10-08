angular.module('cookingspree.service', []).
  value('queryHandler', {
    searchUrl: function(keywords) {
      var query = ""
      angular.forEach(keywords, function(keyword) {
	// handle spaces by wrapping in quotes
	var space = keyword.indexOf(" ");
	keyword = encodeURIComponent(keyword);
	if (space != -1) {
	  keyword = '"' + keyword + '"';
	}
	query += keyword + "+";
      });
      return "http://www.google.com/search?q=" + query;
    }
  });
  
angular.module('cookingspree', [ 'cookingspree.service' ]).
  value('version', '0.0.1').
  run(function(queryHandler) {
  });
  


function IngredientCtrl($scope, queryHandler) {
  // default content
  $scope.ingredients = [
    { name:'Avocado', selected:true },
    { name:'Tehini', selected:true },
    { name:'Eggs', selected:true }
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
 
  // find all pairs of selected ingredients
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
  
  // build a search URL from the list of keywords
  $scope.searchUrl = function(keywords) {
    return queryHandler.searchUrl(keywords);
  };
}


function VersionCtrl($scope, version) {
  $scope.version = version
}