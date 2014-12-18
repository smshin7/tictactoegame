// functions for the controller go in here
angular
	.module('gameApp')
	.controller('GameController', GameController);


function GameController() {

	// this brings the function out to be used in the HTML
	this.selectSquare = selectSquare;
	// this.evaluateWin = evaluateWin;
	this.xWin = xWin;
	this.oWin = oWin;



	this.currentMark = 'x';
	this.playerOne = 'x';
	this.playerTwo = 'o';
	this.moves = 1;
	this.catsGame = false;
	this.gameover = false;
	this.leftScore = 0;
	this.rightScore = 0;

// these cells are used to mark the index
	// this.cell = ['','','','','','','','','']

// this is the grid to set up the gameboard
	this.grid = [
									[{pick: ''},{pick: ''},{pick: ''}],
									[{pick: ''},{pick: ''},{pick: ''}],
									[{pick: ''},{pick: ''},{pick: ''}]
								];

// ng-click selects the square
	function selectSquare(row, col) {

		if (this.currentMark == 'x' && this.grid[row][col].pick == '') {
			this.grid[row][col].pick = 'x';
			this.currentMark = this.playerTwo;

			} else if (this.currentMark == 'o' && this.grid[row][col].pick == '') {
					this.grid[row][col].pick = 'o';
					this.currentMark = this.playerOne;
			}
		// evaluateWin();	
		return this.currentMark;
	}		
	// console.log($scope.grid[0][0]);		

// this function determines whos the currentplayer
 // $scope.currentPlayer = function() {
 // 	if(playerOne )

 // };


// this function declares winner
	// var evaluateWin = function(){

	// 	if (this.grid[0][0].pick == "x" && this.grid[0][1].pick  == "x" && this.grid[0][2].pick  == "x")
	// 	{
	// 			alert("X wins");
	// 	} else if (this.grid[1][0].pick == "x" && this.grid[1][1].pick  == "x" && this.grid[1][2].pick  == "x") {
	// 			alert("X wins");
	// 	} else if (this.grid[2][0].pick == "x" && this.grid[2][1].pick  == "x" && this.grid[2][2].pick  == "x") {
	// 			alert("X wins");
	// 	} else if (this.grid[0][0].pick == "x" && this.grid[1][0].pick  == "x" && this.grid[2][0].pick  == "x") {
	// 			alert("X wins");
	// 	} else if (this.grid[0][1].pick == "x" && this.grid[1][1].pick  == "x" && this.grid[2][1].pick  == "x") {
	// 			alert("X wins");
	// 	} else if (this.grid[0][2].pick == "x" && this.grid[1][2].pick  == "x" && this.grid[2][2].pick  == "x") {
	// 			alert("X wins");
	// 	} else if (this.grid[0][0].pick == "x" && this.grid[1][1].pick  == "x" && this.grid[2][2].pick  == "x") {
	// 			alert("X wins");
	// 	} else if (this.grid[0][2].pick == "x" && this.grid[1][1].pick  == "x" && this.grid[2][0].pick  == "x") {
	// 			alert("X wins");

	// 	} else if (this.grid[0][0].pick == "o" && this.grid[0][1].pick  == "o" && this.grid[0][2].pick  == "o") {
	// 			alert("O wins");
	// 	} else if (this.grid[1][0].pick == "o" && this.grid[1][1].pick  == "o" && this.grid[1][2].pick  == "o") {
	// 			alert("O wins");
	// 	} else if (this.grid[2][0].pick == "o" && this.grid[2][1].pick  == "o" && this.grid[2][2].pick  == "o") {
	// 			alert("O wins");
	// 	} else if (this.grid[0][0].pick == "o" && this.grid[1][0].pick  == "o" && this.grid[2][0].pick  == "o") {
	// 			alert("O wins");
	// 	} else if (this.grid[0][1].pick == "o" && this.grid[1][1].pick  == "o" && this.grid[2][1].pick  == "o") {
	// 			alert("O wins");
	// 	} else if (this.grid[0][2].pick == "o" && this.grid[1][2].pick  == "o" && this.grid[2][2].pick  == "o") {
	// 			alert("O wins");
	// 	} else if (this.grid[0][0].pick == "o" && this.grid[1][1].pick  == "o" && this.grid[2][2].pick  == "o") {
	// 			alert("O wins");
	// 	} else if (this.grid[0][2].pick == "o" && this.grid[1][1].pick  == "o" && this.grid[2][0].pick  == "o") {
	// 			alert("O wins");
	// 	} else if (moves == 9){

	// 			alert("Cats Game!");
	// 			this.catsGame = true;
			
	// 	} else {
	// 			this.moves += 1; 
	// 	}
	// };
	

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

};
