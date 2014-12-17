
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

	$scope.currentPlayer = 'x';
	$scope.playerOne = 'x';
	$scope.playerTwo = 'o';
	$scope.catsGame = false;


// this is the grid to set up the gameboard
	$scope.grid = [
									[{pick: ''}, {pick: ''}, {pick: ''}],
									[{pick: ''}, {pick: ''}, {pick: ''}],
									[{pick: ''}, {pick: ''}, {pick: ''}]
								];

// ng-click selects the square
	$scope.selectSquare = function() {
		console.log($scope.currentPlayer);
		console.log($scope.grid);

		if ($scope.currentPlayer == 'x') {
			this.cell.pick = $scope.playerOne;
			$scope.currentPlayer = $scope.playerTwo;
		} else {
			this.cell.pick = $scope.playerTwo;
			$scope.currentPlayer = $scope.playerOne ;
			};
		return $scope.currentPlayer;
	};				

// this function determines whos the currentplayer
 // $scope.currentPlayer = function() {
 // 	if(playerOne )

 // };


// this function declares winner
	// $scope.evaluateWin = function(){
	// 	if (catsGame == false && grid [][] )

	// };
	
	}]);
