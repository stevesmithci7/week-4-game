var wins = 0;
var losses = 0;
var totalScore = 0;

var randomNumber = Math.floor(Math.random() * 50 + 20);

var blueNumber = Math.floor(Math.random() * 9 + 1);
var greenNumber = Math.floor(Math.random() * 9 + 1);
var purpleNumber = Math.floor(Math.random() * 9 + 1);
var redNumber = Math.floor(Math.random() * 9 + 1);

function reset() {
    randomNumber = Math.floor(Math.random() * 50 + 20);
    totalScore = 0;
    blueNumber = Math.floor(Math.random() * 9 + 1);
    greenNumber = Math.floor(Math.random() * 9 + 1);
    purpleNumber = Math.floor(Math.random() * 9 + 1);
    redNumber = Math.floor(Math.random() * 9 + 1);
    $("#random-number").html("<h1> Random Number: <br>" + randomNumber + "</h1>");
    $("#total-score").html("<h3>Your Total Score Is:<br>" + totalScore);
}

function youWon() {
    alert("YOU WON!");
    wins++;
    $("#wins-losses").html("<h3>Wins: " + wins + "<br><br>" + "Losses: " + losses + "</h3>");
    reset();
}

function youLost() {
    alert("YOU LOST!");
    losses++;
    $("#wins-losses").html("<h3>Wins: " + wins + "<br><br>" + "Losses: " + losses + "</h3>");
    reset();
}

$("#random-number").html("<h1> Random Number: <br>" + randomNumber + "</h1>");

$("#wins-losses").html("<h3>Wins: " + wins + "<br><br>" + "Losses: " + losses + "</h3>");

$("#total-score").html("<h3>Your Total Score Is:<br>" + totalScore);

$('#blue').click(function () {
    totalScore = totalScore + blueNumber;
    $("#total-score").html("<h3>Your Total Score Is:<br>" + totalScore);

    if (totalScore === randomNumber) {
        youWon();
    }

    else if (totalScore > randomNumber) {
        youLost();
    }
});

$('#green').click(function () {
    totalScore = greenNumber + totalScore;

    $("#total-score").html("<h3>Your Total Score Is:<br>" + totalScore);

    if (totalScore === randomNumber) {
        youWon();
    }

    else if (totalScore > randomNumber) {
        youLost();
    }
});

$('#purple').click(function () {

    totalScore = purpleNumber + totalScore;

    $("#total-score").html("<h3>Your Total Score Is:<br>" + totalScore);

    if (totalScore === randomNumber) {
        youWon();
    }

    else if (totalScore > randomNumber) {
        youLost();
    }
});

$('#red').click(function () {

    totalScore = redNumber + totalScore;

    $("#total-score").html("<h3>Your Total Score Is:<br>" + totalScore);

    if (totalScore === randomNumber) {
        youWon();
    }

    else if (totalScore > randomNumber) {
        youLost();
    }
});