// uses strict mode so strings are not coerced, variables are not hoisted, etc...
"use strict";
// const compChoice = ["R", "P", "S"]; is a array of strings.  items in quotes are the string.  Can have many item inbetween quotes separated by a comma
const compChoice = ["R", "P", "S"];

// the function that will be called by the unit test below

const rockPaperScissors = (hand1, hand2) => {
	console.log(hand1, hand2);
	let handOne = hand1.toUpperCase(); // the handOne must be a capital letter because the argument calls for a capital letter i.e. "R" or "S" or "P" or the argument will fail
	let randPick = compChoice[Math.floor(Math.random() * compChoice.length)];
	hand2 = randPick; //this is how we pass the randPick into the argument, without it there is nothing to evaluate
	console.log("handOne- " + handOne); // "handOne -" labels your console log
	console.log(`hand1 is ${hand1}, hand2 is ${hand2}`); // `hand1 is ${hand1}' labels your console log
	if (handOne === hand2) {
		// debugger; use to debug and freeze console at error
		document.getElementById("win_lose").innerHTML = "TIE GAME!";
	}
	if (handOne === "R" && hand2 === "P") {
		document.getElementById("win_lose").innerHTML = "YOU LOSE!";
	}
	if (handOne === "R" && hand2 === "S") {
		document.getElementById("win_lose").innerHTML = "YOU WIN!";
	}
	if (handOne === "P" && hand2 === "S") {
		document.getElementById("win_lose").innerHTML = "YOU LOSE!";
	}
	if (handOne === "P" && hand2 === "R") {
		document.getElementById("win_lose").innerHTML = "YOU WIN!";
	}
	if (handOne === "S" && hand2 === "P") {
		document.getElementById("win_lose").innerHTML = "YOU WIN!";
	}
	if (handOne === "S" && hand2 === "R") {
		document.getElementById("win_lose").innerHTML = "YOU LOSE!";
	}
	document.getElementById("hand2").innerHTML = `Computer's choice is ${hand2}`; 
};
