angular
	.module('gameApp')
	.controller('GameController', GameController)

function GameController(){

	var vm = this;

	currentPlayer = 'x';
	playerOne = 'x';
	playerTwo = 'o';
	moves = 1;
	catsGame = false;
	gameOver = false;
	leftScore = 0;
	rightScore = 0;
	cells = ['','','','','','','','','']
	grid = [
						['','',''],
						['','',''],
						['','','']
					]


	function selectSquare(index)
		if(vm.currentPlayer = 'x' $$ vm.grid)
}