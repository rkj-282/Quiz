const quiz = [
    {
        question: "What does HTML stand for?",
        answers: [
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyper Transfer Machine Language",
            "High Text Main Language"
        ],
        correct: "Hyper Text Markup Language"
    },

    {
        question: "Which language is used for styling web pages?",
        answers: [
            "HTML",
            "CSS",
            "Python",
            "PHP"
        ],
        correct: "CSS"
    },

    {
        question: "Which language is used for web interactivity?",
        answers: [
            "JavaScript",
            "CSS",
            "HTML",
            "SQL"
        ],
        correct: "JavaScript"
    },

    {
        question: "Which symbol is used for IDs in CSS?",
        answers: [
            ".",
            "#",
            "*",
            "@"
        ],
        correct: "#"
    },

    {
        question: "Which tag creates a paragraph?",
        answers: [
            "<h1>",
            "<div>",
            "<p>",
            "<span>"
        ],
        correct: "<p>"
    }
];
const qs=document.getElementById("question")
const answers=document.querySelectorAll(".answer")
let current=0
let score=0
loadqs()
function loadqs(){
qs.textContent=quiz[current].question
answers.forEach((btn,i) => {
  btn.textContent=quiz[current].answers[i]
});
}

answers.forEach(btn => {
  btn.addEventListener("click", function() {
    if(btn.textContent===quiz[current].correct){
        score++
    }
    current++
    if(current<quiz.length){
        loadqs()
    }
else{
    showresult()
}
  })
});
function showresult(){
document.querySelector(".card").innerHTML=`
<h1 class="text-2xl text-center font-bold"> Your Score:${score}/${quiz.length}</h1>
<button onclick="resetQuiz()" class="bg-blue-400 text-white p-3 m-2 rounded-lg text-center text-lg git init">Reset Quiz</button>
`
}

function resetQuiz(){
score=0
 current=0
location.reload()
}