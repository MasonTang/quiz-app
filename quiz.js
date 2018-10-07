let score = 0;
let currentQuestion = 0;
let questions = [
    {
        title: 'photo/bosnia.jpg',
        choices: ['Spain','Bosnia','Slovenia','Serbia'],
        answer:'Bosnia'
    },
    {
        title: 'd',
        choices: ['Spain', 'Bosnia', 'Slovenia', 'Serbia'],
        answer: 'Bosnia'
    },
]

$(document).ready(function(){
    $('.home button').click(function(e){
        e.preventDefault();
        $('.home').hide();
        $('.question').show();
        showQuestion();
    });
});

function showQuestion(){
    let question = questions[currentQuestion];
    $('.question-js img').attr('src', question.title)
    $('div button').html('');
    for(let i = 0; i < question.choices.length; i++){
        $('.button-center').append()
    }
}

function showAnswer(){
    //show correct answer with the wrong answer that was selected
}

function nextQuestion(){

}

function showTotalScore(){

}


