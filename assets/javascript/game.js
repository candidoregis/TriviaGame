
var questions = [
    ["What’s the medical term for low blood sugar?", "Hypoglycemia","resposta2","resposta3","resposta4"],
    ["What does “CPR” stand for in medical emergencies?", "Cardiopulmonary Resuscitation","resposta2","resposta3","resposta4"],
    ["What nation produces two thirds of the world’s vanilla?", "Madagascar","resposta2","resposta3","resposta4"],
    ["What disease is the focus of oncology?", "Cancer","resposta2","resposta3","resposta4"],
    ["Where is the tallest Mountain on Earth?", "Mount Everest","resposta2","resposta3","resposta4"],
    ["What’s the most malleable metal?", "Gold","resposta2","resposta3","resposta4"],
    ["What Italian astronomer invented the thermometer in 1592?", "Galileo","resposta2","resposta3","resposta4"],
    ["Which country gave the USA the ‘Statute of Liberty?", "France","resposta2","resposta3","resposta4"],
    ["What is the name of the worlds higest water fall?", "Angel falls in Venezuela South America","resposta2","resposta3","resposta4"],
    ["What is the smallest country in the world?", "Vatican City","resposta2","resposta3","resposta4"],
    ["What is the deepest lake in the U.S?", "Crater Lake in Oregon States (589 meters).","resposta2","resposta3","resposta4"],
    ["What’s the only metal that’s not a solid at room temperature?", "Mercury","resposta2","resposta3","resposta4"],
    ["Where is Broadway?", "New York City, USA","resposta2","resposta3","resposta4"],
    ["Where would you find the Sea of Tranquility?", "The Moon","resposta2","resposta3","resposta4"],
    ["What is the world's longest river?", "Amazon","resposta2","resposta3","resposta4"],
    ["Name the three primary colours.", "Red, Yellow and Blue.","resposta2","resposta3","resposta4"],
    ["What colour is Absynthe?", "Green","resposta2","resposta3","resposta4"],
    ["Where is the smallest bone in the body?", "Ear","resposta2","resposta3","resposta4"],
    ["Which is the only mammal that can’t jump?", "elephant","resposta2","resposta3","resposta4"],
    ["Who painted the Mona Lisa?", "Da Vinci","resposta2","resposta3","resposta4"],
    ["How many children has Queen Elizabeth the Second got?", "4","resposta2","resposta3","resposta4"],
    ["Who said E=mc2?", "Einstein","resposta2","resposta3","resposta4"],
    ["The May Queen, Wisley Crab, Lane's Prince Albert and Foxwhelps are all species of what?", "Apples"]
]

class Question {
    constructor(question, correctAnswer, wrongAnswers){
        this.question = question;
        this.correctAnswer = correctAnswer;
        this.wrongAnswers = wrongAnswers;
    }

    verifyAnswer(userAnswer){
        if (userAnswer == this.correctAnswer) {
            return true;
        } else {
            return false;
        }
    }
};

function sortQuestion(max){
    return Math.floor(Math.random() * (max - 0 + 1)) + 0;
}

function displayQuestion(question){
    
}

console.log(sortQuestion(questions.length));

