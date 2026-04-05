// uses strict mode so strings are not coerced, variables are not hoisted, etc...
"use strict";
// const compChoice = ["R", "P", "S"]; is a array of strings.  items in quotes are the string.  Can have many item inbetween quotes separated by a comma
const compChoice = ["ROCK", "PAPER", "SCISSORS"];

// the function that will be called by the unit test below

const rockPaperScissors = (hand1, hand2) => {
	debugger;
	console.log(hand1, hand2);
	let handOne = hand1.toUpperCase(); // the handOne must be a capital letter because the argument calls for a capital letter i.e. "R" or "S" or "P" or the argument will fail
	let randPick = compChoice[Math.floor(Math.random() * compChoice.length)];
	hand2 = randPick; //this is how we pass the randPick into the argument, without it there is nothing to evaluate
	console.log("handOne- " + handOne); // "handOne -" labels your console log
	console.log(`hand1 is ${hand1}, hand2 is ${hand2}`); // `hand1 is ${hand1}' labels your console log
	// if (handOne === hand2) {
	// debugger; use to debugger and freeze console at error
	// return "It's a tie!";
	// }
	if (handOne === "ROCK" && hand2 === "ROCK") {
		return "It's a tie!";
		// document.getElementById("win_lose").innerHTML =
	}
	if (handOne === "SCISSORS" && hand2 === "SCISSORS") {
		return "It's a tie";
	}
	if (handOne === "PAPER" && hand2 === "PAPER") {
		return "It's a tie!";
	}

	if (handOne === "ROCK" && hand2 === "PAPER") {
		return "You Lose!";
	}
	if (handOne === "ROCK" && hand2 === "SCISSORS") {
		return "You Win!";
	}
	if (handOne === "PAPER" && hand2 === "SCISSORS") {
		return "You Lose!";
	}
	if (handOne === "PAPER" && hand2 === "ROCK") {
		return "You Win!";
	}
	if (handOne === "SCISSORS" && hand2 === "PAPER") {
		return "You Win!";
	}
	if (handOne === "SCISSORS" && hand2 === "ROCK") {
		return "You Lose!";
	}
	document.getElementById("hand2").innerHTML = `Computer's choice is ${hand2}`;
};

var assert = require("assert");
if (typeof describe === "function") {
	describe("#rockPaperScissors()", () => {
		it("should detect a tie", () => {
			assert.equal(rockPaperScissors("ROCK", "ROCK"), "It's a tie!");
			assert.equal(rockPaperScissors("PAPER", "PAPER"), "It's a tie!");
			assert.equal(rockPaperScissors("SCISSORS", "SCISSORS"), "It's a tie!");
		});
		it("should detect which hand won", () => {
			assert.equal(rockPaperScissors("ROCK", "PAPER"), "You Lose!");
			assert.equal(rockPaperScissors("PAPER", "SCISSORS"), "You Lose!");
			assert.equal(rockPaperScissors("ROCK", "SCISSORS"), "You Win!");
		});
		it('should scrub input to ensure uppercase with "trim"ed whitepace', () => {
			assert.equal(rockPaperScissors("RoCK", " PAPER "), "You Lose!");
			assert.equal(rockPaperScissors("PAPER", "SCISSORS"), "You Lose!");
			assert.equal(rockPaperScissors("ROCK ", "sCiSsOrs"), "You Win!");
		});
	});
} else {
	getPrompt();
}
