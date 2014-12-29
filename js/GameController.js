angular
	.module('gameApp')
	.controller('GameController', GameController);

// Injects firebase into GameController function
GameController.$inject = ['$firebase'];

// Function set as the controller for the TTT game
function GameController($firebase) {

	// this declares vm as this in all functions within the GameController function
	var vm = this;
	var fbdata;
	var ref = new Firebase("https://dogettt.firebaseio.com/fbdata");	
	var sync = $firebase(ref)	
	var fbdata = sync.$asObject;

	// this brings the select function out to be used in the DOM
	this.selectSquare = selectSquare;
	this.newGame = newGame;
	this.clearScore = clearScore;
	this.getGame = getGame;

	// this function syncs game data onto firebase and loads the gameboard on click
	function getGame() {
		this.fbdata = sync.$asObject();
			ref.set({
				grid: [
								[{pick: ''},{pick: ''},{pick: ''}],
								[{pick: ''},{pick: ''},{pick: ''}],
								[{pick: ''},{pick: ''},{pick: ''}]
							],
		// Game variables
				currentPlayer: 'x',
				playerOne: 'x',
				playerTwo: 'o',
				moves: 1,
				gameOver: false,
				catsGame: false,
				leftScore: 0,
				rightScore: 0,
				gameResult: ''
			});
		};

// ng-click selects the square then changes turn
	function selectSquare(row, col) {
		this.fbdata = sync.$asObject();
		if (this.fbdata.currentPlayer == 'x' && this.fbdata.grid[row][col].pick == '') {
			this.fbdata.grid[row][col].pick = 'x';
			this.fbdata.currentPlayer = this.fbdata.playerTwo;
			} else if (this.fbdata.currentPlayer == 'o' && this.fbdata.grid[row][col].pick == '') {
				this.fbdata.grid[row][col].pick = 'o';
				this.fbdata.currentPlayer = this.fbdata.playerOne;
			}
		evaluateWin();	
		return fbdata.currentPlayer;
		this.fbdata.moves += 1;
		// this function/method saves the new data into firebase
		this.fbdata.$save();
	}		
	
// this function declares winner
	function evaluateWin() {
		this.fbdata = sync.$asObject();
		if (this.fbdata.grid[0][0].pick == 'x' && this.fbdata.grid[0][1].pick  == 'x' && this.fbdata.grid[0][2].pick  == 'x')
		{
				playerOneWin();
		} else if (this.fbdata.grid[1][0].pick == "x" && this.fbdata.grid[1][1].pick  == "x" && this.fbdata.grid[1][2].pick  == "x") {
				playerOneWin();
		} else if (this.fbdata.grid[2][0].pick == "x" && this.fbdata.grid[2][1].pick  == "x" && this.fbdata.grid[2][2].pick  == "x") {
				playerOneWin();
		} else if (this.fbdata.grid[0][0].pick == "x" && this.fbdata.grid[1][0].pick  == "x" && this.fbdata.grid[2][0].pick  == "x") {
				playerOneWin();
		} else if (this.fbdata.grid[0][1].pick == "x" && this.fbdata.grid[1][1].pick  == "x" && this.fbdata.grid[2][1].pick  == "x") {
				playerOneWin();
		} else if (this.fbdata.grid[0][2].pick == "x" && this.fbdata.grid[1][2].pick  == "x" && this.fbdata.grid[2][2].pick  == "x") {
				playerOneWin();
		} else if (this.fbdata.grid[0][0].pick == "x" && this.fbdata.grid[1][1].pick  == "x" && this.fbdata.grid[2][2].pick  == "x") {
				playerOneWin();
		} else if (this.fbdata.grid[0][2].pick == "x" && this.fbdata.grid[1][1].pick  == "x" && this.fbdata.grid[2][0].pick  == "x") {
				playerOneWin();

		} else if (this.fbdata.grid[0][0].pick == "o" && this.fbdata.grid[0][1].pick  == "o" && this.fbdata.grid[0][2].pick  == "o") {
				playerTwoWin();
		} else if (this.fbdata.grid[1][0].pick == "o" && this.fbdata.grid[1][1].pick  == "o" && this.fbdata.grid[1][2].pick  == "o") {
				playerTwoWin();
		} else if (this.fbdata.grid[2][0].pick == "o" && this.fbdata.grid[2][1].pick  == "o" && this.fbdata.grid[2][2].pick  == "o") {
				playerTwoWin();
		} else if (this.fbdata.grid[0][0].pick == "o" && this.fbdata.grid[1][0].pick  == "o" && this.fbdata.grid[2][0].pick  == "o") {
				playerTwoWin();
		} else if (this.fbdata.grid[0][1].pick == "o" && this.fbdata.grid[1][1].pick  == "o" && this.fbdata.grid[2][1].pick  == "o") {
				playerTwoWin();
		} else if (this.fbdata.grid[0][2].pick == "o" && this.fbdata.grid[1][2].pick  == "o" && this.fbdata.grid[2][2].pick  == "o") {
				playerTwoWin();
		} else if (this.fbdata.grid[0][0].pick == "o" && this.fbdata.grid[1][1].pick  == "o" && this.fbdata.grid[2][2].pick  == "o") {
				playerTwoWin();
		} else if (this.fbdata.grid[0][2].pick == "o" && this.fbdata.grid[1][1].pick  == "o" && this.fbdata.grid[2][0].pick  == "o") {
				playerTwoWin();
		} else if (this.fbdata.moves == 9){
				catsGame();
		} else {
				this.fbdata.moves += 1; 
		}
		this.fbdata.$save();
	};
	

// these two functions add a score when player wins
	function playerOneWin() {
			this.fbdata = $firebase(ref).$asObject();
			this.fbdata.gameOver = true;
			this.fbdata.gameResult = "much win so doge... wow";
			this.fbdata.leftScore++;
			this.fbdata.$save();
	};
	function playerTwoWin() {
			this.fbdata = $firebase(ref).$asObject();
			this.fbdata.gameOver = true;
			this.fbdata.gameResult = "meow! grump cat wins! >:(";
			this.fbdata.rightScore++;
			this.fbdata.$save();
	};
// function that runs when cats game is true
	function catsGame() {
		this.fbdata = $firebase(ref).$asObject();
		this.fbdata.gameOver = true;
		this.fbdata.gameResult = "not a cats game... but a tie!";
		this.fbdata.catsGame = true;
		this.fbdata.moves = 0
	}


	// Resets game 
	function newGame() {
		this.fbdata = $firebase(ref).$asObject();
		ref.set({
				grid: [
								[{pick: ''},{pick: ''},{pick: ''}],
								[{pick: ''},{pick: ''},{pick: ''}],
								[{pick: ''},{pick: ''},{pick: ''}]
							],
				currentPlayer: 'x',
				playerOne: 'x',
				playerTwo: 'o',
				moves: 1,
				gameOver: false,
				catsGame: false,
				gameResult: ''
			});
	};

	// Clears the scoreboard
	function clearScore() {
		this.fbdata = $firebase(ref).$asObject();
		this.fbdata.leftScore = 0;
		this.fbdata.rightScore = 0;
	}

};

