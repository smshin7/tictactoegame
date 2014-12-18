// functions for the controller go in here
angular
	.module('gameApp')
	.controller('GameController', GameController);


function GameController() {

	// this declares vm as this in all functions within the GameController function
	var vm = this;

	// this brings the select function out to be used in the DOM
	this.selectSquare = selectSquare;
	// this.xWin = xWin;
	// this.oWin = oWin;



	vm.currentMark = 'x';
	vm.playerOne = 'x';
	vm.playerTwo = 'o';
	vm.moves = 1;
	vm.catsGame = false;
	vm.gameover = false;
	vm.leftScore = 0;
	vm.rightScore = 0;

// these cells are used to mark the index
	// this.cell = ['','','','','','','','','']

// this is the grid to set up the gameboard
	vm.grid = [
									[{pick: ''},{pick: ''},{pick: ''}],
									[{pick: ''},{pick: ''},{pick: ''}],
									[{pick: ''},{pick: ''},{pick: ''}]
								];

// ng-click selects the square
	function selectSquare(row, col) {

		if (vm.currentMark == 'x' && vm.grid[row][col].pick == '') {
			vm.grid[row][col].pick = 'x';
			vm.currentMark = vm.playerTwo;

			} else if (vm.currentMark == 'o' && vm.grid[row][col].pick == '') {
					vm.grid[row][col].pick = 'o';
					vm.currentMark = vm.playerOne;
			}
		evaluateWin();	
		return vm.currentMark;
		//test
		console.log(vm.grid[row][col]);
	}		
	

// this function determines whos the currentplayer
 // $scope.currentPlayer = function() {\
 // 	if(playerOne )

 // };


// this function declares winner
	function evaluateWin() {
		if (vm.grid[0][0].pick == 'x' && vm.grid[0][1].pick  == 'x' && vm.grid[0][2].pick  == 'x')
		{
				alert("X wins");
		} else if (vm.grid[1][0].pick == "x" && vm.grid[1][1].pick  == "x" && vm.grid[1][2].pick  == "x") {
				alert("X wins");
		} else if (vm.grid[2][0].pick == "x" && vm.grid[2][1].pick  == "x" && vm.grid[2][2].pick  == "x") {
				alert("X wins");
		} else if (vm.grid[0][0].pick == "x" && vm.grid[1][0].pick  == "x" && vm.grid[2][0].pick  == "x") {
				alert("X wins");
		} else if (vm.grid[0][1].pick == "x" && vm.grid[1][1].pick  == "x" && vm.grid[2][1].pick  == "x") {
				alert("X wins");
		} else if (vm.grid[0][2].pick == "x" && vm.grid[1][2].pick  == "x" && vm.grid[2][2].pick  == "x") {
				alert("X wins");
		} else if (vm.grid[0][0].pick == "x" && vm.grid[1][1].pick  == "x" && vm.grid[2][2].pick  == "x") {
				alert("X wins");
		} else if (vm.grid[0][2].pick == "x" && vm.grid[1][1].pick  == "x" && vm.grid[2][0].pick  == "x") {
				alert("X wins");

		} else if (vm.grid[0][0].pick == "o" && vm.grid[0][1].pick  == "o" && vm.grid[0][2].pick  == "o") {
				alert("O wins");
		} else if (vm.grid[1][0].pick == "o" && vm.grid[1][1].pick  == "o" && vm.grid[1][2].pick  == "o") {
				alert("O wins");
		} else if (vm.grid[2][0].pick == "o" && vm.grid[2][1].pick  == "o" && vm.grid[2][2].pick  == "o") {
				alert("O wins");
		} else if (vm.grid[0][0].pick == "o" && vm.grid[1][0].pick  == "o" && vm.grid[2][0].pick  == "o") {
				alert("O wins");
		} else if (vm.grid[0][1].pick == "o" && vm.grid[1][1].pick  == "o" && vm.grid[2][1].pick  == "o") {
				alert("O wins");
		} else if (vm.grid[0][2].pick == "o" && vm.grid[1][2].pick  == "o" && vm.grid[2][2].pick  == "o") {
				alert("O wins");
		} else if (vm.grid[0][0].pick == "o" && vm.grid[1][1].pick  == "o" && vm.grid[2][2].pick  == "o") {
				alert("O wins");
		} else if (vm.grid[0][2].pick == "o" && vm.grid[1][1].pick  == "o" && vm.grid[2][0].pick  == "o") {
				alert("O wins");
		} else if (moves == 9){
				alert("Cats Game!");
				vm.catsGame = true;
		} else {
				vm.moves += 1; 
		}
	};
	

// these two functions add a score when player wins
	// var xWin = function() {

	// 	$scope.leftScore += 1;
	// };

	// var oWin = function() {

	// 	$scope.rightScore += 1;
	// };






	// reset game on click button reset game
	var resetGame = function () {

		this.currentPlayer = 'x';
		this.playerOne = 'x';
		this.playerTwo = 'o';
		this.catsGame = false;
		this.moves = 1;
		this.grid = [
										[{pick: ''}, {pick: ''}, {pick: ''}],
										[{pick: ''}, {pick: ''}, {pick: ''}],
										[{pick: ''}, {pick: ''}, {pick: ''}]
									];

	};

};
