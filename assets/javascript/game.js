$(document).ready(function () {
    var questions = [
        ["What’s the medical term for low blood sugar?", "Hypoglycemia", "Hyperglycemia", "Hyperglow", "Glycemic"],
        ["What does “CPR” stand for in medical emergencies?", "Cardiopulmonary Resuscitation", "Cardiopulmonary Relaxation", "Cardiopulmonary Rehabilitation", "Cardiopulmonary Rescue"],
        ["What nation produces two thirds of the world’s vanilla?", "Madagascar", "Mexico", "India", "Portugal"],
        ["What disease is the focus of oncology?", "Cancer", "Hepatitis", "Black Death", "Diabetes mellitus"],
        ["Where is the tallest Mountain on Earth?", "Mount Everest", "Mount Fuji", "Nanga Parbat", "K2"],
        ["What’s the most malleable metal?", "Gold", "Silver", "Mercury", "Steel"],
        ["What Italian astronomer invented the thermometer in 1592?", "Galileo", "Van Gogh", "Shakespeare", "Einstein"],
        ["Which country gave the USA the ‘Statute of Liberty?", "France", "Brazil", "Italy", "Japan"],
        ["What is the name of the worlds higest water fall?", "Angel falls (Venezuela)", "Niagara Falls (Canada)", "Sutherland Falls (New Zealand)", "Iguazu Falls (Brazil)"],
        ["What is the smallest country in the world?", "Vatican City", "City of London", "Adamstown", "Maza"],
        ["What is the deepest lake in the U.S?", "Crater Lake", "Lake Baikal", "Caspian Sea", "Lake Malawi"],
        ["What’s the only metal that’s not a solid at room temperature?", "Mercury", "Gold", "Silver", "Copper"],
        ["Where is Broadway?", "New York City", "Los Angeles", "Miami", "Seattle"],
        ["Where would you find the Sea of Tranquility?", "The Moon", "South Africa", "Mars", "Syberia"],
        ["What is the world's longest river?", "Amazon River", "Mississippi River", "Ganges River", "Finke River"],
        ["Name the three primary colours.", "Red, Yellow and Blue.", "Red, Green and Blue", "Red, Green and Yellow", "Green, Yellow and Blue"],
        ["What colour is Absynthe?", "Green", "Transparent", "Gold", "Dark Amber"],
        ["Where is the smallest bone in the body?", "Ear", "Fingers", "Toes", "Spine"],
        ["Which is the only mammal that can’t jump?", "Elephant", "Cow", "Lion", "Monkey"],
        ["Who painted the Mona Lisa?", "Da Vinci", "Van Gogh", "Michelangelo", "Picasso"],
        ["How many children has Queen Elizabeth the Second got?", "4", "2", "1", "5"],
        ["Who said E=mc2?", "Einstein", "Darwin", "Newton", "Galileo"],
        ["The May Queen, Wisley Crab, Lane's Prince Albert and Foxwhelps are all species of what?", "Apples", "English Teas", "Flowers", "Animals"]
    ];

    var result;
    var winsCount = 0;
    var lossesCount = 0;
    var questionDisplayInterval;
    var time = 0;
    var timeoutFlag = false;
    var questionPos;

    // FUNCTION TO VERIFY IF USER'S CHOICE IS THE RIGHT ONE
    function verifyAnswer(userAnswer, questionPos) {
        if (userAnswer == questions[questionPos][1]) {
            return true;
        } else {
            return false;
        }
    }

    // FUNCTION TO RANDOMLY CHOOSE ONE QUESTION FROM THE ARRAY
    function sortQuestion(max) {
        var num = 0;
        while (num == 0) {
            num = Math.floor(Math.random() * (max - 0 + 1)) + 0;
        }
        return num;
    }

    // FUNCTION TO DISPLAY THE QUESTION ON THE SCREEN
    function displayQuestion(question) {
        $("#questions-line").text(question[0]);
        for (var i = 1; i < question.length; i++) {
            $("#answer" + i + "").text(question[i]);
        }
        startQuiz();
    }

    // FUNCTION USED TO RUN THE TIMER
    function count() {
        time++;
        var converted = timeConverter(time);
        $("#clockTimer").text(converted);
        if (time >= 10) {
            stopQuiz();
            time = 0;
            verifyTurnWinner("", questionPos, true)
        }
    }

    // FUNCTION TO CONVERT THE TIME
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

    // FUNCTION TO START THE TIMER
    function startQuiz() {
        clearInterval(questionDisplayInterval);
        time = 0;
        questionDisplayInterval = setInterval(count, 1000);
    }

    // FUNCTION TO STOP THE TIMER
    function stopQuiz() {
        clearInterval(questionDisplayInterval);
    }

    // FUNCTION TO SWITCH CLASSES FOR SHADOW EFFECT
    function toggleShadowClasses(flag) {
        if (flag == "win") {
            $("#hText").toggleClass("loseEffect", false);
            $("#hText").toggleClass("winEffect", true);
        } else if (flag == "lose") {
            $("#hText").toggleClass("winEffect", false);
            $("#hText").toggleClass("loseEffect", true);
        }
    }

    // FUNCTION THAT VERIFIES WHO WON THE TURN
    function verifyTurnWinner(answer, questionPos, timeoutFlag) {
        if (!timeoutFlag) {
            if (verifyAnswer(answer, questionPos)) {
                toggleShadowClasses("win");
                $("#hText").text("You Win");
                winsCount++;
            } else {
                toggleShadowClasses("lose");
                $("#hText").text("You Lose");
                displayRightAnswer(); //need to finish
                lossesCount++;
            }
        } else {
            toggleShadowClasses("lose");
            $("#hText").text("TimeOut - You Lose");
            displayRightAnswer(); //need to finish
            lossesCount++;
        }
        toggleScreen();
        stopQuiz();
    }

    // FUNCTION TO SWITCH CLASS TO DISPLAY THE RESULTS 
    function toggleScreen() {
        $("#resultsScreen").toggleClass("resultOff", false);
        $("#resultsScreen").toggleClass("resultOn", true);
    }

    // FUNCTION TO CONTINUE THE GAME AND DETERMINE THE WINNER
    function continueGame(playedGames) {
        if (playedGames < 10) {
            restartGame();
        } else {
            $("#resBtn").text("Restart");
            toggleShadowClasses("lose");
            if (winsCount > lossesCount) {
                toggleShadowClasses("win");
                $("#hText").text("You Won the Game");
            } else if (winsCount < lossesCount) {
                $("#hText").text("You Lost the Game");
            } else {
                $("#hText").text("Draw");
            }
            toggleScreen();
            winsCount = 0;
            lossesCount = 0;
        }
    }

    // FUNCTION THAT (RE)START THE GAME
    function restartGame() {
        questionPos = sortQuestion(questions.length);
        displayQuestion(questions[questionPos]);
        $("#resBtn").text("OK");
    }

    function displayRightAnswer(){

    }

    restartGame();

    // FUNCTION RESPONSIBLE FOR THE OK AND RESTART BUTTON
    $("#resBtn").on("click", function () {
        $("#resultsScreen").toggleClass("resultOn", false);
        $("#resultsScreen").toggleClass("resultOff", true);
        if ($("#resBtn").text() == "OK") {
            continueGame(winsCount + lossesCount);
        } else {
            restartGame();
        }
    });

    // FUNCTION THAT GETS THE USER ANSWER
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
        verifyTurnWinner(chosenAnswer, questionPos, false);
    });

});