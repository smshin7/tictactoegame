// functions for the controller go in here
gameApp
	.controller('GameController', ['$scope', function($scope) {

	$scope.currentPlayer = 'x';
	$scope.playerOne = 'x';
	$scope.playerTwo = 'o';
	$scope.moves = 1;
	$scope.catsGame = false;
	$scope.gameover = false;
	$scope.leftScore = 0;
	$scope.rightScore = 0;

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
				alert("X wins");
		} else if ($scope.grid[1][0].pick == "x" && $scope.grid[1][1].pick  == "x" && $scope.grid[1][2].pick  == "x") {
				alert("X wins");
		} else if ($scope.grid[2][0].pick == "x" && $scope.grid[2][1].pick  == "x" && $scope.grid[2][2].pick  == "x") {
				alert("X wins");
		} else if ($scope.grid[0][0].pick == "x" && $scope.grid[1][0].pick  == "x" && $scope.grid[2][0].pick  == "x") {
				alert("X wins");
		} else if ($scope.grid[0][1].pick == "x" && $scope.grid[1][1].pick  == "x" && $scope.grid[2][1].pick  == "x") {
				alert("X wins");
		} else if ($scope.grid[0][2].pick == "x" && $scope.grid[1][2].pick  == "x" && $scope.grid[2][2].pick  == "x") {
				alert("X wins");
		} else if ($scope.grid[0][0].pick == "x" && $scope.grid[1][1].pick  == "x" && $scope.grid[2][2].pick  == "x") {
				alert("X wins");
		} else if ($scope.grid[0][2].pick == "x" && $scope.grid[1][1].pick  == "x" && $scope.grid[2][0].pick  == "x") {
				alert("X wins");

		} else if ($scope.grid[0][0].pick == "o" && $scope.grid[0][1].pick  == "o" && $scope.grid[0][2].pick  == "o") {
				alert("O wins");
		} else if ($scope.grid[1][0].pick == "o" && $scope.grid[1][1].pick  == "o" && $scope.grid[1][2].pick  == "o") {
				alert("O wins");
		} else if ($scope.grid[2][0].pick == "o" && $scope.grid[2][1].pick  == "o" && $scope.grid[2][2].pick  == "o") {
				alert("O wins");
		} else if ($scope.grid[0][0].pick == "o" && $scope.grid[1][0].pick  == "o" && $scope.grid[2][0].pick  == "o") {
				alert("O wins");
		} else if ($scope.grid[0][1].pick == "o" && $scope.grid[1][1].pick  == "o" && $scope.grid[2][1].pick  == "o") {
				alert("O wins");
		} else if ($scope.grid[0][2].pick == "o" && $scope.grid[1][2].pick  == "o" && $scope.grid[2][2].pick  == "o") {
				alert("O wins");
		} else if ($scope.grid[0][0].pick == "o" && $scope.grid[1][1].pick  == "o" && $scope.grid[2][2].pick  == "o") {
				alert("O wins");
		} else if ($scope.grid[0][2].pick == "o" && $scope.grid[1][1].pick  == "o" && $scope.grid[2][0].pick  == "o") {
				alert("O wins");
		} else if (moves == 9){

				alert("Cats Game!");
				$scope.catsGame = true;
			
		} else {
				$scope.moves += 1; 
		}
	};
	

// these two functions add a score when player wins
var xWin = function() {

	$scope.leftScore += 1;
};

var oWin = function() {

	$scope.rightScore += 1;
};






// reset game on click button reset game

var resetGame = function () {

	$scope.currentPlayer = 'x';
	$scope.playerOne = 'x';
	$scope.playerTwo = 'o';
	$scope.catsGame = false;
	$scope.moves = 1;

	$scope.grid = [
									[{pick: ''}, {pick: ''}, {pick: ''}],
									[{pick: ''}, {pick: ''}, {pick: ''}],
									[{pick: ''}, {pick: ''}, {pick: ''}]
								];

};

	}]);
