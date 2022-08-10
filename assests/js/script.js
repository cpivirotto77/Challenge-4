var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById('question-container')
var shuffledQuestions, currentQuestionsIndex
var questionElement = document.getElementById('question')
var answerButtonElement = document.getElementById('answer-buttons')
// timer function
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};


startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionsIndex++
    setNextQuestion()
})





function startGame(){
    
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionsIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}



function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionsIndex])

}
function resetState(){
    nextButton.classList.add('hide')
    while (answerButtonElement.firstChild){
        answerButtonElement.removeChild
        (answerButtonElement.firstChild)
    }
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonElement.appendChild(button)
    })

}

function selectAnswer(e){
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionsIndex + 1){
    nextButton.classList.remove('hide')
     } else {
            startButton.innerText = 'restart'
            startButton.classList.remove('hide')
        }
    }



function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct){
        element.classList.add('correct')
        } else {
            element.classList.add('wrong')
        }
    }
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
    question: 'Can a Boolean be a number?',
    answers: [
        { text: "True", correct: false },
        { text: "False", correct: true }
    ]
},
{
    question: 'What does this reresent?("5","6","8","9")',    
    answers:[
        { text: "Boolean", correct: false },
        { text: "String", correct: true },
        { text: "Number", correct: false },
        { text: "Hot Dog", correct: false }
    ]
    },


]
    