function rollDice() {
	let dice = Math.ceil(Math.random()*6);
	document.getElementById('diceNum').innerHTML = dice;
}
