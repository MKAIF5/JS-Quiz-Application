// const main = document.getElementById("main");
const questionContainer = document.querySelector(".question");
const button = document.getElementById("btn");
const optionsAll = document.querySelectorAll("#options")

const questions = [
    {
        question: "Who Is The Founder Of Pakistan ?",
        option: ["Allama Iqbal", "Fatima ALi Jinnah", "Liaquat Ali Khan", "Quaide Azam"],
        correctAnswer: "Quaide Azam"
    },
    {
        question: "What Is The National Animal Of Pakistan ?",
        option: ["Lion", "Bear", "Markhor", "Horse"],
        correctAnswer: "Markhor"
    },
    {
        question: "Which Sports Is Most Commonly Play In Pakistan ?",
        option: ["FootBall", "Cricket", "Hockey", "Table Tennis"],
        correctAnswer: "Cricket"
    },
    {
        question: "Which City Is The Capital Of Pakistan ?",
        option: ["Karachi", "Lahore", "Islamabad", "Quetta"],
        correctAnswer: "Islamabad"
    },
    {
        question: "Which One Is The Biggest Mountain In The Pakistan ?",
        option: ["K2", "Nanga Parbat", "Mount Everest", "Makalu"],
        correctAnswer: "K2"
    },

];


let currentQuestionIndex = 0;

const showQuestion = (index) => {

    const question = questions[index];
    questionContainer.innerText = question.question

    const optionContainer = document.getElementById("options");

    optionContainer.innerHTML = " "
    question.option.forEach(opt => {
        const optionDiv = document.createElement("div");
        optionDiv.className = "option";
        optionDiv.innerText = opt;
        optionDiv.addEventListener("click", () => checkAnswer(opt))
        optionContainer.appendChild(optionDiv)
    });
};

const checkAnswer = (selectedOption) => {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    optionsAll.forEach(op => {
        op.classList.remove("Correct", "Incorrect");

        if (op.innerText === "Correct") {
            op.classList.add("Correct")
        }

        if (op.innerText === selectedOption && selectedOption !== correctAnswer) {
            op.classList.add("Incorrect")
        }
    });
}
checkAnswer()

showQuestion(currentQuestionIndex);





// questions.forEach(que =>{
//     const questionDiv = document.createElement("div");
//     questionDiv.className = "question"
//     questionDiv.innerText = que.question
//     questionContainer.appendChild(questionDiv)
// });