var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$("#play").on("click", function () {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

$(".btn").on("click", function () {
    var userChosenColour = $(this).attr("id"); // Get the id of the clicked button
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
    // Check if the most recent user answer is the same as the game pattern
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        // Check if the user has finished their sequence
        if (userClickedPattern.length === gamePattern.length) {
            // Call nextSequence after a short delay
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        playSound("wrong");

        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200);

        $("#level-title").text("Game over, u got it wrong :)");

        startOver();
    }
}

function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);

    // Visually indicate which button the system has selected
    $("#" + randomChosenColour).addClass("pressed");
    setTimeout(() => {
        $("#" + randomChosenColour).removeClass("pressed");
    }, 200); // Flash duration increased for better visibility

    playSound(randomChosenColour);
}

function playSound(name) {
    var audio = new Audio("/assets/sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(() => {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

function startOver() {
    gamePattern = [];
    level = 0;
    started = false;
}
