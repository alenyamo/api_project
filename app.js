

var app = angular.module('myApp', []);

app.controller('pokeCtrl', function($scope, $http) {

$scope.submitSearch = function (isValid){

$scope.searchHeader = "";


if (isValid){
$scope.urlsearch = "https://api.pokemontcg.io/v1/cards?types=" + $scope.type;
$scope.urlsearch2 = "https://api.pokemontcg.io/v1/cards?nationalPokedexNumber=" +$scope.number;
    console.log($scope.type);
	$http.get($scope.urlsearch).then(function (response) {
      $scope.myData = response.data;
        var d = document.getElementById("answer");
        d.innerHTML= "";
      for (var i =0; i < 100; i ++) {
    $scope.typeName = $scope.type;  
      d.innerHTML += '<div>' + $scope.myData.cards[i].name + '<img src="' + $scope.myData.cards[i].imageUrl + '"></div></br>';  
      
      }  
        
  });
    
    	$http.get($scope.urlsearch2).then(function (response) {
      $scope.myData = response.data;
        $scope.searchHeader = "Your lucky  pokemon is " + $scope.myData.cards[0].name;
        $scope.display = $scope.myData.cards[1].imageUrl;
  });
}
else{
  $scope.display = "Sorry, something went wrong     :(";
}
};
});