// var boxOne = document.getElementById("box1");
// var boxTwo = document.getElementById("box2");
// var boxThree = document.getElementById("box3");
// var boxFour = document.getElementById("box4");
// var boxFive = document.getElementById("box5");
// var boxSix = document.getElementById("box6");
// var boxSeven = document.getElementById("box7");
// var boxEight = document.getElementById("box8");
// var boxNine = document.getElementById("box9");

// this function will run when button is clicked
function flipCoin() {
	var	coinMath = Math.random();
	if (coinMath > 0.50) {
		//set coinValue to heads
		document.getElementById("coin").innerHTML = "HEADS";
		return "heads";
		
	} else {
		//set coinValue to tails
		document.getElementById("coin").innerHTML = "TAILS";
		return "tails";
	}
};


// this function will push value into array X or O
function selectSquare () {




}


// ANGULAR APP
var tttApp = angular.module('tttApp',[]);

// functions for the controller go in here
tttApp.controller('TTTController' ['$scope', function($scope) {





	}]);