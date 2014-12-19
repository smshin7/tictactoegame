// functions for the controller go in here
angular
	.module('gameApp')
	.controller('GameController', GameController);

// Function set as the controller for the TTT game
function GameController() {

	// this declares vm as this in all functions within the GameController function
	var vm = this;

	// this brings the select function out to be used in the DOM
	this.selectSquare = selectSquare;
	this.resetGame = resetGame;
	this.clearStore = clearStore;

	// Game variables
	vm.currentMark = 'x';
	vm.playerOne = 'x';
	vm.playerTwo = 'o';
	vm.moves = 1;
	vm.catsGame = false;
	vm.gameOver = false;
	vm.leftScore = 0;
	vm.rightScore = 0;
	vm.gameResult = '';

// this is the grid to set up the gameboard
	vm.grid = [
									[{pick: ''},{pick: ''},{pick: ''}],
									[{pick: ''},{pick: ''},{pick: ''}],
									[{pick: ''},{pick: ''},{pick: ''}]
								];

// ng-click selects the square then changes turn
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
		vm.moves += 1;
	}		
	
// this function declares winner
	function evaluateWin() {
		if (vm.grid[0][0].pick == 'x' && vm.grid[0][1].pick  == 'x' && vm.grid[0][2].pick  == 'x')
		{
				playerOneWin();
		} else if (vm.grid[1][0].pick == "x" && vm.grid[1][1].pick  == "x" && vm.grid[1][2].pick  == "x") {
				playerOneWin();
		} else if (vm.grid[2][0].pick == "x" && vm.grid[2][1].pick  == "x" && vm.grid[2][2].pick  == "x") {
				playerOneWin();
		} else if (vm.grid[0][0].pick == "x" && vm.grid[1][0].pick  == "x" && vm.grid[2][0].pick  == "x") {
				playerOneWin();
		} else if (vm.grid[0][1].pick == "x" && vm.grid[1][1].pick  == "x" && vm.grid[2][1].pick  == "x") {
				playerOneWin();
		} else if (vm.grid[0][2].pick == "x" && vm.grid[1][2].pick  == "x" && vm.grid[2][2].pick  == "x") {
				playerOneWin();
		} else if (vm.grid[0][0].pick == "x" && vm.grid[1][1].pick  == "x" && vm.grid[2][2].pick  == "x") {
				playerOneWin();
		} else if (vm.grid[0][2].pick == "x" && vm.grid[1][1].pick  == "x" && vm.grid[2][0].pick  == "x") {
				playerOneWin();

		} else if (vm.grid[0][0].pick == "o" && vm.grid[0][1].pick  == "o" && vm.grid[0][2].pick  == "o") {
				playerTwoWin();
		} else if (vm.grid[1][0].pick == "o" && vm.grid[1][1].pick  == "o" && vm.grid[1][2].pick  == "o") {
				playerTwoWin();
		} else if (vm.grid[2][0].pick == "o" && vm.grid[2][1].pick  == "o" && vm.grid[2][2].pick  == "o") {
				playerTwoWin();
		} else if (vm.grid[0][0].pick == "o" && vm.grid[1][0].pick  == "o" && vm.grid[2][0].pick  == "o") {
				playerTwoWin();
		} else if (vm.grid[0][1].pick == "o" && vm.grid[1][1].pick  == "o" && vm.grid[2][1].pick  == "o") {
				playerTwoWin();
		} else if (vm.grid[0][2].pick == "o" && vm.grid[1][2].pick  == "o" && vm.grid[2][2].pick  == "o") {
				playerTwoWin();
		} else if (vm.grid[0][0].pick == "o" && vm.grid[1][1].pick  == "o" && vm.grid[2][2].pick  == "o") {
				playerTwoWin();
		} else if (vm.grid[0][2].pick == "o" && vm.grid[1][1].pick  == "o" && vm.grid[2][0].pick  == "o") {
				playerTwoWin();
		} else if (vm.moves == 9){
				vm.gameResult = "NoT A CaTs GaME...BuT A TiiE!";
				vm.catsGame = true;
				vm.moves = 0
		} else {
				vm.moves += 1; 
		}
	};
	

// these two functions add a score when player wins
	function playerOneWin() {
			vm.gameOver = true;
			vm.gameResult = "muCh Win sO DogE! wow >.<";
			vm.leftScore += 1;
	};
	function playerTwoWin() {
			vm.gameOver = true;
			vm.gameResult = "MEOW! GRUMPCAT WINS! >:(";
			vm.rightScore += 1;
	};

	// Resets game 
	function resetGame() {
		vm.currentPlayer = 'x';
		vm.playerOne = 'x';
		vm.playerTwo = 'o';
		vm.catsGame = false;
		vm.gameOver = false;
		vm.moves = 1;
		vm.gameResult = '';

		vm.grid = [
										[{pick: ''}, {pick: ''}, {pick: ''}],
										[{pick: ''}, {pick: ''}, {pick: ''}],
										[{pick: ''}, {pick: ''}, {pick: ''}]
									];

	};

	function clearStore() {
		vm.leftScore = 0;
		vm.rightScore = 0;
	}


};

