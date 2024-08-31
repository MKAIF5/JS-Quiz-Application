const questionContainer = document.getElementById("question");
const button = document.getElementById("btn");
const optionContainer = document.getElementById("options");
const time = document.getElementById("time");

const questions = [
    {
        question: "Who Is The Founder Of Pakistan?",
        option: ["Allama Iqbal", "Fatima Ali Jinnah", "Liaquat Ali Khan", "Quaide Azam"],
        correctAnswer: "Quaide Azam"
    },
    {
        question: "What Is The National Animal Of Pakistan?",
        option: ["Lion", "Bear", "Markhor", "Horse"],
        correctAnswer: "Markhor"
    },
    {
        question: "Which Sports Is Most Commonly Played In Pakistan?",
        option: ["Football", "Cricket", "Hockey", "Table Tennis"],
        correctAnswer: "Cricket"
    },
    {
        question: "Which City Is The Capital Of Pakistan?",
        option: ["Karachi", "Lahore", "Islamabad", "Quetta"],
        correctAnswer: "Islamabad"
    },
    {
        question: "Which One Is The Biggest Mountain In Pakistan?",
        option: ["K2", "Nanga Parbat", "Mount Everest", "Makalu"],
        correctAnswer: "K2"
    }
];

let currentQuestionIndex = 0;

const showQuestion = (index) => {
    const question = questions[index];
    questionContainer.innerText = question.question;

    optionContainer.innerHTML = '';
    question.option.forEach(opt => {
        const optionDiv = document.createElement("div");
        optionDiv.className = "option";
        optionDiv.innerText = opt;
        optionDiv.addEventListener("click", () => checkAnswer(opt));
        optionContainer.appendChild(optionDiv);
    });
};

const checkAnswer = (selectedOption) => {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    const options = optionContainer.querySelectorAll(".option");

    options.forEach(option => {
        option.classList.remove("correct", "incorrect");
        if (option.innerText === correctAnswer) {
            option.classList.add("correct");
        }
        if (option.innerText === selectedOption && selectedOption !== correctAnswer) {
            option.classList.add("incorrect");
        }
    });
};

const endQuiz = () => {
   questionContainer.innerText = 'Time\'s up! Quiz Completed!';
   optionContainer.innerText = " "
   button.style.display = "none"
}

button.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
    } else {
        questionContainer.innerText = 'Quiz Completed!';
        optionContainer.innerHTML = '';
        button.style.display = 'none';
        clearInterval(timeInterval);
    }
});

let seconds = 60;
let timeInterval;

const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
}

const updateTimer = () => {
    if (seconds > 0) {
        seconds--
        time.innerText = formatTime(seconds)
    }
    
    else {
        clearInterval(timeInterval)
        endQuiz()
    }
}

const startTimer = () => {
    timeInterval = setInterval(updateTimer, 1000)
}

showQuestion(currentQuestionIndex);
startTimer()
