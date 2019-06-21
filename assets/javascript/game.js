
var questions = [
    ["What’s the medical term for low blood sugar?", "Hypoglycemia", "resposta2", "resposta3", "resposta4"],
    ["What does “CPR” stand for in medical emergencies?", "Cardiopulmonary Resuscitation", "resposta2", "resposta3", "resposta4"],
    ["What nation produces two thirds of the world’s vanilla?", "Madagascar", "resposta2", "resposta3", "resposta4"],
    ["What disease is the focus of oncology?", "Cancer", "resposta2", "resposta3", "resposta4"],
    ["Where is the tallest Mountain on Earth?", "Mount Everest", "resposta2", "resposta3", "resposta4"],
    ["What’s the most malleable metal?", "Gold", "resposta2", "resposta3", "resposta4"],
    ["What Italian astronomer invented the thermometer in 1592?", "Galileo", "resposta2", "resposta3", "resposta4"],
    ["Which country gave the USA the ‘Statute of Liberty?", "France", "resposta2", "resposta3", "resposta4"],
    ["What is the name of the worlds higest water fall?", "Angel falls in Venezuela South America", "resposta2", "resposta3", "resposta4"],
    ["What is the smallest country in the world?", "Vatican City", "resposta2", "resposta3", "resposta4"],
    ["What is the deepest lake in the U.S?", "Crater Lake in Oregon States (589 meters).", "resposta2", "resposta3", "resposta4"],
    ["What’s the only metal that’s not a solid at room temperature?", "Mercury", "resposta2", "resposta3", "resposta4"],
    ["Where is Broadway?", "New York City, USA", "resposta2", "resposta3", "resposta4"],
    ["Where would you find the Sea of Tranquility?", "The Moon", "resposta2", "resposta3", "resposta4"],
    ["What is the world's longest river?", "Amazon", "resposta2", "resposta3", "resposta4"],
    ["Name the three primary colours.", "Red, Yellow and Blue.", "resposta2", "resposta3", "resposta4"],
    ["What colour is Absynthe?", "Green", "resposta2", "resposta3", "resposta4"],
    ["Where is the smallest bone in the body?", "Ear", "resposta2", "resposta3", "resposta4"],
    ["Which is the only mammal that can’t jump?", "elephant", "resposta2", "resposta3", "resposta4"],
    ["Who painted the Mona Lisa?", "Da Vinci", "resposta2", "resposta3", "resposta4"],
    ["How many children has Queen Elizabeth the Second got?", "4", "resposta2", "resposta3", "resposta4"],
    ["Who said E=mc2?", "Einstein", "resposta2", "resposta3", "resposta4"],
    ["The May Queen, Wisley Crab, Lane's Prince Albert and Foxwhelps are all species of what?", "Apples"]
]

var result;
var winsCount = 0;
var lossesCount = 0;
var questionDisplayInterval;
var time = 0;
var timeoutFlag = false;
var questionPos;

function verifyAnswer(userAnswer, questionPos) {
    if (userAnswer == questions[questionPos][1]) {
        return true;
    } else {
        return false;
    }
}

function sortQuestion(max) {
    var num = 0;
    while (num == 0) {
        num = Math.floor(Math.random() * (max - 0 + 1)) + 0;
    }
    return num;
}

function displayQuestion(question) {
    $("#questions-line").text(question[0]);
    for (var i = 1; i < question.length; i++) {
        $("#answer" + i + "").text(question[i]);
    }
    startQuiz();
}

function count() {
    time++;
    var converted = timeConverter(time);
    $("#clockTimer").text(converted);
    if (time >= 30) {
        stopQuiz();
        verifyTurnWinner("", questionPos, true)
    }
}

function timeConverter(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (minutes === 0) {
        minutes = "00";
    } else if (minutes < 10) {
        minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
}

function startQuiz() {
    clearInterval(questionDisplayInterval);
    time = 0;
    questionDisplayInterval = setInterval(count, 1000);
}

function stopQuiz() {
    clearInterval(questionDisplayInterval);
}

function verifyTurnWinner(answer, questionPos, timeoutFlag) {
    if (!timeoutFlag) {
        if (verifyAnswer(answer, questionPos)) {
            //alert("WIN"); // change to screen
            toggleScreen();
            winsCount++;

        } else {
            alert("You Lose"); // change to screen
            lossesCount++;
            //display correct answer
        }
    } else {
        alert("TimeOut - You Lose"); // change to screen
        lossesCount++;
        //display correct answer
    }
    stopQuiz();
    continueGame(winsCount + lossesCount);
}

function toggleScreen(){
    $("#resultsScreen").toggleClass("resultOff",false);
    $("#resultsScreen").toggleClass("resultOn",true);
}

function continueGame(playedGames) {
    if (playedGames < 10) {
        restartGame();
    } else {
        endingGame();
        // restartGame();
    }
}

function restartGame() {
    questionPos = sortQuestion(questions.length);
    displayQuestion(questions[questionPos]);
}

function endingGame(){
    alert("Fim de jogo");
}

//var index = joanOfArcInfoParts.indexOf(input);
//var valuesIndex = joanOfArcInfoValues[index];
$("#resBtn").on("click", function (){
    $("#resultsScreen").toggleClass("resultOn",false);
    $("#resultsScreen").toggleClass("resultOff",true);
})

$(".answer-buttons").on("click", function () {

    var chosenAnswer;
    var optionVal = $(this).val();

    switch (optionVal) {

        case "1":
            chosenAnswer = $(this).text();
            break;

        case "2":
            chosenAnswer = $(this).text();
            break;

        case "3":
            chosenAnswer = $(this).text();
            break;

        case "4":
            chosenAnswer = $(this).text();
            break;

    }
    // stopQuiz();
    verifyTurnWinner(chosenAnswer, questionPos, false);
});

restartGame();