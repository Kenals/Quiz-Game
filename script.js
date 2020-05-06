const options=document.querySelector(".options").children;
const answerTrackerContainer=document.querySelector(".answers-tracker");
const questionNumberSpan=document.querySelector(".question-num-value");
const totalQuestionSpan=document.querySelector(".total-question");
const question=document.querySelector(".question");
const op1=document.querySelector(".option1");
const op2=document.querySelector(".option2");
const op3=document.querySelector(".option3");
const op4=document.querySelector(".option4");
let questionIndex;
let index=0;


//Questions, options, answers

const questions=[
    {
      q:'Which Country is the largest in the world by surface area?',
      options:['a) USA', 'b) China', 'C) Russia', 'd) Canada'],
      answer: 2
    },
    {
        q: 'Which of these countries has three national capitals?',
        options:['a) The Netherlands', 'b) Isreal', 'c) Bolivia', 'd) South Africa'],
        answer: 3
    },
    {
        q: "In which country is the Angel Falls world's highest uninterrupted waterfall?",
        options:['a) Brazil', 'b) Indonesia', 'c) Venezuela', 'd) Uganda'],
        answer: 2
    },
    {
        q: 'What is by area the smallest independent country on Earth?',
        options:['a) Vatican City', 'b) Monaco', 'c) San Marino', 'd) Nauru'],
        answer: 0
    },
    {
        q: "What is the approximate size of the Earth's equator?",
        options:['a) 30,000km/18,641mi', 'b) 20,000km/12,427mi', 'c) 10,000km/6,214mi', 'd) 40,000km/24,855mi'],
        answer: 3
    }
]

//set questions and options and question number
totalQuestionSpan.innerHTML=questions.length;
function load(){
    questionNumberSpan.innerHTML=index+1;
    question.innerHTML=questions[questionIndex].q;
    op1.innerHTML=questions[questionIndex].options[0];
    op2.innerHTML=questions[questionIndex].options[1];
    op3.innerHTML=questions[questionIndex].options[2];
    op4.innerHTML=questions[questionIndex].options[3];
    index++;
}

function check(element){
    if(element.id==questions[questionIndex].answer){
        element.classList.add("correct");
        updateAnswerTracker("correct")
    }
    else{
        element.classList.add("wrong");
        updateAnswerTracker("wrong")
    }
    disabledOptions()
}

function disabledOptions(){
    for(let i=0; i<options.length; i++){
        options[i].classList.add("disabled");
        if(options[i].id==questions[questionIndex].answer){
            options[i].classList.add("correct");
        }
    }
}

function validate(){
    if(!options[0].classList.contains("disabled")){
        alert("Please Choose one option")
    }
    else{
        randomQuestion();
   
    }
}

function next(){
    Validate();
}

function randomQuestion(){
    let randomNumber=Math.floor(Math.random()*questions.length);
    questionIndex=randomNumber;
    load();
}

function answerTracker(){
    for(let i=0; i<questions.length; i++){
        const div=document.createElement("div")
        answerTrackerContainer.appendChild(div);
    }
}

function updateAnswerTracker(classNam){
    answerTrackerContainer.children[index-1].classList.add(classNam); 
}

window.onload=function(){
    randomQuestion()
    answerTracker()
}