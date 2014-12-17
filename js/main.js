
// // this function will run when button is clicked
// function flipCoin() {
// 	var	coinMath = Math.random();
// 	if (coinMath > 0.50) {
// 		//set coinValue to heads
// 		document.getElementById("coin").innerHTML = "HEADS";
// 		return "heads";
		
// 	} else {
// 		//set coinValue to tails
// 		document.getElementById("coin").innerHTML = "TAILS";
// 		return "tails";
// 	}
// };	

// ANGULAR APP
var gameApp = angular.module('gameApp',[]);

// functions for the controller go in here
gameApp.controller('GameController', ['$scope', function($scope) {


	$scope.grid = [
									[{pick: ''}, {pick: ''}, {pick: ''}],
									[{pick: ''}, {pick: ''}, {pick: ''}],
									[{pick: ''}, {pick: ''}, {pick: ''}]
								];

	$scope.selectSquare = function() {
		

	}							



	// $scope.selectCell = function(index) {
	// 	if ((cells = '') && (playerOne = true)) {
	// 		$scope.index = 'x';
	// 		} else {
	// 			$scope.index = 'o'
	// 	}

	// 		console.log(index);
	// };



	
	}]);
