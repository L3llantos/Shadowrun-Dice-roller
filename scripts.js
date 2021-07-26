function rollDice() {
    //hide old results
    document.getElementById("rollResults").style.visibility = "hidden";

    var ani = document.getElementById("disableAnimations").checked;

    if (ani === true) {
        setTimeout(function () {
            document.getElementById("rollResults").style.visibility = "visible";
        }, 17250);
        var video = document.getElementById("rolledVideo")

        video.play();
    }


    var dieCount = document.getElementById("diceAmount").value;

    var i = 0;

    const rolls = new Array();


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
    //count wins and fails
    function countWins(wins) {
        x = getOccurrence(rolls, 5);
        y = getOccurrence(rolls, 6);
        wins = x + y;
        return wins;
    }
    document.getElementById("fails").innerHTML = getOccurrence(rolls, 1);
    //end
    //display results
    document.getElementById("wins").innerHTML = countWins();
    document.getElementById("Result").innerHTML = rolls;
    document.getElementById("rollResults").style.visibility = "visible";
    console.log(rolls);
}


