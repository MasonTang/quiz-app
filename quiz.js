"use strict";

let score = 0;
let currentQuestion = 0;
let questions = [
    {
        title: 'refactored/bosnia.jpg',
        alt: 'Bosnia',
        choices: ['Spain','Bosnia','Slovenia','Serbia'],
        answer:'Bosnia'
    },
    {
        title: 'refactored/spain.jpg',
        alt:"Spain",
        choices: ['Spain', 'Italy', 'France', 'Columbia'],
        answer: 'Spain'
    },

    {
        title: 'refactored/ireland.jpg',
        alt: 'Ireland',
        choices: ['England', 'Scotland', 'Ireland', 'Finland'],
        answer: 'Ireland'
    },
    {
        title: 'refactored/colombia.jpg',
        alt: 'Colombia',
        choices: ['Spain', 'Bosnia', 'Italy', 'Colombia'],
        answer: 'Colombia'
    },
    {
        title: 'refactored/hungary.jpg',
        alt: 'Hungary',
        choices: ['Slovenia', 'Germany', 'Hungary', 'Serbia'],
        answer: 'Hungary'
    },
    {
        title: 'refactored/czech.jpg',
        alt: 'Czech Republic',
        choices: ['Germany', 'Czech Republic', 'Italy', 'Serbia'],
        answer: 'Czech Republic'
    },
    {
        title: 'refactored/spain2.jpg',
        alt: 'Spain',
        choices: ['Columbia', 'Mexico', 'Italy', 'Spain'],
        answer: 'Spain'
    },
    {
        title: 'refactored/croatia.jpg',
        alt: 'Croatia',
        choices: ['Austria', 'Croatia', 'Columbia', 'Slovenia'],
        answer: 'Croatia'
    },
    {
        title: 'refactored/italy.jpg',
        alt: 'Italy',
        choices: ['Croatia', 'France', 'Germany', 'Italy'],
        answer: 'Italy'
    },
    {
        title: 'refactored/slovenia.jpg',
        alt: 'Slovenia',
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
    //Img src gets looped into the question page 
    $('.question-js img').attr('src', question.title);
    //Img alt gets looped into the picture file 
    $('.question-js img').attr('alt', question.alt);
    //Clear answer choices after every iteration
    $('.button-js').html('');

    //adds an id and the question choices to button
    for(let i = 0; i < question.choices.length; i++){
        $('.button-js').append(`
        <fieldset>
        <button type="submit" id='${i}' class="">${question.choices[i]}
        </fieldset>
        </button>`
        );
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
    

    $('.button-js').on('click', 'button', function(event) {
        event.preventDefault()
        const question = questions[currentQuestion];
        //this finds the id that was clicked
        //this represents .button-js and the button
        const currentChoice = $(this).attr('id');
        //question represents the object number
        //choices represent the key choices
        //currentChoice looks at the id that was clicked. The id represents the array index for the choices. 
        const selectedAnswer = question.choices[currentChoice];
        //correctAnswer represents the question[object] and answer
        const correctAnswer = question.answer;
        //Correct answer
        const questionNumber = `Question number ${currentQuestion + 1}`
        if(selectedAnswer === correctAnswer){
            $('.answer-js').html(`
            <div class="center-div">
                <h1 class="h1-center-large question-number"></h1>
                <h1 class="h1-center-large">You are correct!!!</h1>
                </br>
                <img class="right-gif" src="https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif" alt="correct-gif">
            </div>

            <div class="answer-btn">
                <button class="home-button next-question-js button-center">Next Question </button>
            </div>`);
            score++;
            $('.points').html(`Nomad Points: ${score}`);
        //Wrong answer
        } else {
            $('.answer-js').html(`
        <div class="center-div">
            <h1 class="h1-center-large question-number"></h1>
            <img class="wrong-gif" alt="wrong-gif" src="https://media.giphy.com/media/3oKIP8quIMUnLdfTAQ/giphy.gif">
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
        } 
        $('.question-number').text(questionNumber);
        $('.selected-answer').text(selectedAnswer);
        $('.correct-answer').text(correctAnswer);
        $('.question-js').hide();
        $('.answer-js').show();
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
            <img class="center-gif-end" src="https://media.giphy.com/media/11sBLVxNs7v6WA/giphy.gif" alt="happy-gif">
            <h1 class="h1-center-large">You are a World Traveler</h2>
            <br>
            <button class="restart-js home-button button-center">Restart Quiz</button>
            <button class="rate-js home-button button-center">Rate Quiz</button>
        </div>`);
    }
    else if(score >= 4){
        $('.answer-js').html(`
        <div class="center-div">
            <h1 class="h1-center-large">You have gotten ${score} out of ${currentQuestion} correct.</h1>
            <img class="center-gif-end" alt="cat-traveler-gif" src="https://media.giphy.com/media/ToMjGpxInCZSzD3V82s/giphy.gif">
            <br>
            <h1 class="h1-center-large">You have knowledge of the outside world</h2>
            <button class="restart-js home-button button-center">Restart Quiz</button>
            <button class="rate-js home-button button-center">Rate Quiz</button>
        </div>`);
    }
    else{
        $('.answer-js').html(`
        <div class="center-div">
            <h1 class="h1-center-large">You have gotten ${score} out of ${currentQuestion} correct.</h1>
            <img class="center-gif-end" alt="south-park-gif" src="https://media.giphy.com/media/3o6Ztk5WzIPLwaSpe8/giphy.gif">
            <h1 class="h1-center-large">You need to go out more</h1>
            <br>
            <button class="restart-js home-button button-center">Restart Quiz</button>
            <button class="rate-js home-button button-center">Rate Quiz</button>
        </div>`);
    }
    restartQuiz();
    rateQuiz()
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
    })
}

function makeQuiz(){
    homePage();
    showAnswer();
    nextQuestion();
}

makeQuiz();