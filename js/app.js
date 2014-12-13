
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
var tttApp = angular.module('tttApp',[]);

// functions for the controller go in here
tttApp.controller('TTTController' ['$scope', function($scope) {


//this is the empty arrays for player 1


//this is the empty arrays for player 2

// this function will push property true into arraw
function selectSquareOne () {
	$scope.playerOne.push();
	}

function selectSquareTwo () {
	$scope.playerOne.push();
}

function selectSquareThree () {
	$scope.playerOne.push();
}

function selectSquareFour () {
	$scope.playerOne.push();
}

function selectSquareFive () {
	$scope.playerOne.push();
}

function selectSquareSix () {
	$scope.playerOne.push();
}

function selectSquareSeven () {
	$scope.playerOne.push();
}

function selectSquareEight () {
	$scope.playerOne.push();
}

function selectSquareNine () {
	$scope.playerOne.push();
}



	}]);