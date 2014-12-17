
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
		// console.log($scope.currentPlayer);
	

		if ($scope.currentPlayer == 'x' && this.cell.pick == '') {
			
			this.cell.pick = $scope.playerOne;
			$scope.currentPlayer = $scope.playerTwo;

			} else if ($scope.currentPlayer == 'o' && this.cell.pick == ''){
			this.cell.pick = $scope.playerTwo;
			$scope.currentPlayer = $scope.playerOne;

			};

		evaluateWin();	
		return $scope.currentPlayer;
	};		
	// console.log($scope.grid[0][0]);		

// this function determines whos the currentplayer
 // $scope.currentPlayer = function() {
 // 	if(playerOne )

 // };


// this function declares winner
	var evaluateWin = function(){
		if ($scope.grid[0][0].pick == "x" && $scope.grid[0][1].pick  == "x" && $scope.grid[0][2].pick  == "x")
		{
			alert("x wins");
		}

	};
	

// reset game on click button reset game

// var resetGame = function () {

// 	$scope.currentPlayer = 'x';
// 	$scope.playerOne = 'x';
// 	$scope.playerTwo = 'o';
// 	$scope.catsGame = false;

// 	$scope.grid = [
// 									[{pick: ''}, {pick: ''}, {pick: ''}],
// 									[{pick: ''}, {pick: ''}, {pick: ''}],
// 									[{pick: ''}, {pick: ''}, {pick: ''}]
// 								];
// }

	}]);
