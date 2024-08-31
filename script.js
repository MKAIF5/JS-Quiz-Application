const questions = [
    {
        question: "Who Is The Founder Of Pakistan ?",
        option: ["Allama Iqbal", "Fatima ALi Jinnah", "Liaquat Ali Khan", "Quaide-Azam"]
    },
    {
        question: "What Is The National Animal Of Pakistan ?",
        option: ["Lion", "Bear", "Markhor", "Horse"]
    },
    {
        question: "Which Sports Is Most Commonly Play In Pakistan ?",
        option: ["FootBall", "Cricket", "Hockey", "Table Tennis"]
    },
    {
        question: "Which City Is The Capital Of Pakistan ?",
        option: ["Karachi", "Lahore", "Islamabad", "Quetta"]
    },
    {
        question: "Which One Is The Biggest Mountain In The Pakistan ?",
        option: ["K2", "Nanga Parbat", "Mount Everest", "Makalu"]
    },

];

// const main = document.getElementById("main");
const questionContainer = document.querySelector(".question")

let currentQuestionIndex = 0;

const showQuestion = (index) => {

    const question = questions[index];
    questionContainer.innerText = question.question

    const optionContainer = document.getElementById("options");
    
    optionContainer.innerHTML = " "
    question.option.forEach(opt =>{
        const optionDiv = document.createElement("div");
        optionDiv.className = "option";
        optionDiv.innerText = opt;
        optionContainer.appendChild(optionDiv)
    })
}


showQuestion(currentQuestionIndex);


// questions.forEach(que =>{
//     const questionDiv = document.createElement("div");
//     questionDiv.className = "question"
//     questionDiv.innerText = que.question
//     questionContainer.appendChild(questionDiv)
// });