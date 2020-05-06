
const options=document.querySelector(".options").children;
const answerTrackerContainer=document.querySelector(".answers-tracker");
const questionNumberSpan=document.querySelector(".question-num-value");
const totalQuestionSpan=document.querySelector(".total-question");
const correctAnswerSpan=document.querySelector(".correct-answers");
const totalQuestionSpan2=document.querySelector(".total-question2");
const question=document.querySelector(".question");
const op1=document.querySelector(".option1");
const op2=document.querySelector(".option2");
const op3=document.querySelector(".option3");
const op4=document.querySelector(".option4");
let questionIndex;
let index=0;
let myArray=[];
let myArr=[];
let score=0;


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
        score++;

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

function enableOptions(){
    for(let i=0; i<options.length; i++){
        options[i].classList.remove("disabled","correct", "wrong");
    }
  }
    
function validate(){
    if(!options[0].classList.contains("disabled")){
        alert("Please Choose one option")
    }
    else{
        enableOptions();
        randomQuestion();
    }
}

function next(){
    validate();
}

function randomQuestion(){
    let randomNumber=Math.floor(Math.random()*questions.length);
    let hitDuplicate=0;
    if(index==questions.length){
        quizOver(); 
    }
    else{
        if(myArray.length>0){
            for(let i=0; i<myArray.length; i++){
                if(myArray[i]==randomNumber){
                    hitDuplicate=1;
                    break;
                }
            }
            if(hitDuplicate==1){
                randomQuestion();
            }
            else{
                questionIndex=randomNumber;
                load();
                myArr.push(questionIndex);
            }
        }
        if(myArray.length==0){
           questionIndex=randomNumber;
           load();
           myArr.push(questionIndex);
        }
        console.log("myArr:"+myArr);
    myArray.push(randomNumber);
    }
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

function quizOver(){
    document.querySelector(".quiz-over").classList.add("show");
    correctAnswerSpan.innerHTML=score;
    totalQuestionSpan2.innerHTML=questions.length;
}

function tryAgain(){
   window.location.reload();
}

window.onload=function(){
    randomQuestion();
    answerTracker();
}