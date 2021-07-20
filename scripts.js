function rollDice() {
    var dieCount = document.getElementById("diceAmount").value;
    var i = 0;
    const rolls = new Array();

    //count wins or fails
    function getOccurrence(array, value) {
        return array.filter((v) => (v === value)).length;
    }


    //Roll Dice
    while (i < dieCount) {
        let x;
        x = Math.floor(Math.random() * 6) + 1;
        rolls.push(x);
        console.log(rolls);

        i++;

    }

    function countWins(wins) {
        x = getOccurrence(rolls, 5);
        y = getOccurrence(rolls, 6);
        wins = x + y;
        return wins;
    }

    document.getElementById("fails").innerHTML = getOccurrence(rolls, 1);

    document.getElementById("wins").innerHTML = countWins();

    document.getElementById("Result").innerHTML = rolls;
    console.log(rolls);

}