const questions = [
    {
        question: "What is 2 + 2?",
        answers: [
            { text: "22", correct: false },
            { text: "2", correct: false },
            { text: "4", correct: true },
            { text: "0", correct: false }
        ]
    },
    {
        question: "Which is largest animal in the world?",
        answers: [
            { text: "Elephant", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Giraffe", correct: false },
            { text: "Dinosaur", correct: false }
        ]
    },
    {
        question: "Which is the largest country in the world?",
        answers: [
            { text: "Canada", correct: false },
            { text: "China", correct: false },
            { text: "Russia", correct: true },
            { text: "USA", correct: false }
        ]
    },
    {
        question: "Which is the largest continent in the world?",
        answers: [
            { text: "Africa", correct: false },
            { text: "Europe", correct: false },
            { text: "Australia", correct: false },
            { text: "Asia", correct: true }
        ]
    },
    {
        question: "Which is the largest planet in the solar system?",
        answers: [
            { text: "Saturn", correct: false },
            { text: "Earth", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Mars", correct: false }
        ]
    },
    {
        question: "Which is the largest ocean in the world?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Pacific Ocean", correct: true },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false }
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            { text: "Arabian Desert", correct: false },
            { text: "Gobi Desert", correct: false },
            { text: "Kalahari Desert", correct: false },
            { text: "Sahara Desert", correct: true }
        ]
    },
    {
        question: "Which is the largest river in the world?",
        answers: [
            { text: "Nile River", correct: true },
            { text: "Amazon River", correct: false },
            { text: "Yangtze River", correct: false },
            { text: "Mississippi River", correct: false }
        ]
    },
    {
        question: "Which is the largest mountain in the world?",
        answers: [
            { text: "K2", correct: false },
            { text: "Kanchenjunga", correct: false },
            { text: "Mount Everest", correct: true },
            { text: "Lhotse", correct: false }
        ]
    },
    {
        question: "Which is the largest forest in the world?",
        answers: [
            { text: "Congo Rainforest", correct: false },
            { text: "Amazon Rainforest", correct: true },
            { text: "Valdivian Temperate Rainforest", correct: false },
            { text: "Daintree Rainforest", correct: false }
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '/' + questions.length + ". " + currentQuestion.question + "<br><br>" + "<h5>Select the correct answer:</h5>";

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct == "true";
    if (isCorrect) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct == "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    // questionElement.innerHTML = "Your Score is " + score + "/" + questions.length;
    questionElement.innerHTML = `Your Score is ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Restart";
    nextButton.style.display = "block";
}



function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else {
        showScore();
    }
}


nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});


startQuiz();










