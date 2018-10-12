"use strict";

let score = 0;
let currentQuestion = 0;
let questions = [
    {
        title: 'photo/bosnia.jpg',
        choices: ['Spain','Bosnia','Slovenia','Serbia'],
        answer:'Bosnia'
    },
    {
        title: 'photo/spain.jpg',
        choices: ['Spain', 'Italy', 'France', 'Columbia'],
        answer: 'Spain'
    },

    {
        title: 'photo/ireland.jpg',
        choices: ['England', 'Scotland', 'Ireland', 'Finland'],
        answer: 'Ireland'
    },
    {
        title: 'photo/colombia.jpg',
        choices: ['Spain', 'Bosnia', 'Italy', 'Colombia'],
        answer: 'Colombia'
    },
    {
        title: 'photo/hungary.jpg',
        choices: ['Slovenia', 'Germany', 'Hungary', 'Serbia'],
        answer: 'Hungary'
    },
    {
        title: 'photo/czech.jpg',
        choices: ['Germany', 'Czech Republic', 'Italy', 'Serbia'],
        answer: 'Czech Republic'
    },
    {
        title: 'photo/spain2.jpg',
        choices: ['Columbia', 'Mexico', 'Italy', 'Spain'],
        answer: 'Spain'
    },
    {
        title: 'photo/croatia.jpg',
        choices: ['Austria', 'Croatia', 'Columbia', 'Slovenia'],
        answer: 'Croatia'
    },
    {
        title: 'photo/italy.jpg',
        choices: ['Croatia', 'France', 'Germany', 'Italy'],
        answer: 'Italy'
    },
    {
        title: 'photo/slovenia.jpg',
        choices: ['Slovenia', 'Czech Republic', 'Ireland', 'Serbia'],
        answer: 'Slovenia'
    },
]


function homePage(){
    $('.home button').click(function(e){
        e.preventDefault();
        $('.home').hide();
        $('.question').show();
        showQuestion();
    });
}

function showQuestion(){
    //Loops through question object when combined with a loop
    let question = questions[currentQuestion];
    //Img src becomes the picture file 
    $('.question-js img').attr('src', question.title);
    //Clear answer choices after every iteration
    $('.button-js').html('');

    //adds an id and the question choices gets displayed
    for(let i = 0; i < question.choices.length; i++){
        $('.button-js').append(`
        <button type="button" id='${i}' class="">${question.choices[i]}</button>`);
    }

    //add Color to the buttons
    $('#0').addClass('btn btn-blue btn-1')
    $('#1').addClass('btn btn-green btn-2')
    $('#2').addClass('btn btn-red btn-1')
    $('#3').addClass('btn btn-orange btn-2')
}


function showAnswer(){
    //1. if the correct li was clicked then it will say you are correct
    //2. if the incorrect li was clicked then it will show you a table with the answer that was clicked and the right answer
    //3. hide showQuestion
    //4. Display correct answer.
    

    $('.button-js').on('click', 'button', function() {
        let question = questions[currentQuestion];
        //this finds the id that was clicked
        //this represents .button-js and the button
        let currentChoice = $(this).attr('id');
        //question represents the object number
        //choices represent the key choices
        //currentChoice looks at the id that was clicked. The id represents the array index for the choices. 
        let selectedAnswer = question.choices[currentChoice];
        //correctAnswer represents the question[object] and answer
        let correctAnswer = question.answer;
        //Correct answer
        if(selectedAnswer === correctAnswer){
            $('.question-js').hide();
            $('.answer-js').html(`
            <div class="center-div">
                <h1 class="h1-center-large">You are correct!!!</h1>
                </br>
                <img class="right-gif" src="https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif">
            </div>

            <div class="answer-btn">
                <button class="home-button next-question-js button-center">Next Question </button>
            </div>`);

            $('.answer-js').show();
            score++;
            $('.points').html(`Nomad Points: ${score}`);
        //Wrong answer
        } else {
            $('.answer-js').html(`
        <div class="center-div">
            <img class="wrong-gif" src="https://media.giphy.com/media/3oKIP8quIMUnLdfTAQ/giphy.gif">
        </div>

        <table>
            <tr>
                <th>Your Selected answer</th>
                <th>Correct Answer</th>
            </tr>
            <tr>
                <td class="selected-answer"></td>
                <td class="correct-answer"></td>
            </tr>
        </table>
        <div class="answer-btn">
            <button class="home-button next-question-js button-center">Next Question</button>
        </div>`);
            $('.selected-answer').text(selectedAnswer);
            $('.correct-answer').text(correctAnswer);
            $('.question-js').hide();
            $('.answer-js').show();
        } 
        currentQuestion++
        if(currentQuestion >= questions.length){
            showTotalScore()
        }
    })
}

function nextQuestion(){
    //1. hide showAnswer
    //2. Loop through the currentQuestion
    //3. ShowQuestion
    $('.answer-js').on('click','.next-question-js', function(){
        $('.answer-js').hide();
        $('.question').show();
       
        showQuestion();
    })
}

function showTotalScore(){
    //1. You have gotten x out of y correct.
    
    $('.answer-js').html(`
    <h1>You have gotten ${score} out of ${currentQuestion} correct.</h1>
    <button class="restart-js">restartQuiz</button>`);
    
    if (score >= 7){
        $('.answer-js').html(`
        <div class="center-div">
            <h1 class="h1-center-large">You have gotten ${score} out of ${currentQuestion} correct.</h1>
            <img class="center-gif-end" src="https://media.giphy.com/media/11sBLVxNs7v6WA/giphy.gif">
            <h1 class="h1-center-large">You are a World Traveler</h2>
            <br>
            <button class="restart-js home-button button-center">Restart Quiz</button>
        </div>`);
    }
    else if(score >= 4){
        $('.answer-js').html(`
        <div class="center-div">
            <h1 class="h1-center-large">You have gotten ${score} out of ${currentQuestion} correct.</h1>
            <img class="center-gif-end" src="https://media.giphy.com/media/ToMjGpxInCZSzD3V82s/giphy.gif">
            <br>
            <h1 class="h1-center-large">You have knowledge of the outside world</h2>
            <button class="restart-js home-button button-center">Restart Quiz</button>
        </div>`);
    }
    else{
        $('.answer-js').html(`
        <div class="center-div">
            <h1 class="h1-center-large">You have gotten ${score} out of ${currentQuestion} correct.</h1>
            <img class="center-gif-end" src="https://media.giphy.com/media/3o6Ztk5WzIPLwaSpe8/giphy.gif">
            <h1 class="h1-center-large">You need to go out more</h1>
            <br>
            <button class="restart-js home-button button-center">Restart Quiz</button>
        </div>`);
    }
    restartQuiz();
}

function restartQuiz(){
    //1. make the currentQuestion 0 and score 0 also.
    $('.answer-js').on('click','.restart-js', function(){
        score = 0;
        currentQuestion = 0;
        $('.home').show();
        $('.question-js').hide();
        $('.answer-js').hide();
        $('.points').html(`Nomad Points: ${score}`);
        console.log('hi');
    })
}

function makeQuiz(){
    homePage();
    showAnswer();
    nextQuestion();
}

makeQuiz();