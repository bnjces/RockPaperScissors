//
var moves = ['rock', 'paper', 'scissors'];

//
var humanWins = 0;
var computerWins = 0;
var ties = 0;

//
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

// 
function computerMove(){
    return getRndInteger(0,2); 
}

//
function playerClick(move){
    var message;
    var computer = computerMove();
    var elComputer = document.getElementById('computer');
    // clear all background colors, and set select one
    for(var i = 0; i < 3; i++){
        var el = document.getElementById(moves[i]);
        if(move === moves[i])
        {
            el.style.backgroundColor = 'lightblue';
        }
        else{
            el.style.backgroundColor = 'white';
        }
    }
    elComputer.className = 'fa fa-hand-' + moves[computer] + '-o fa-2x';
    elComputer.innerHTML = '<br/>' + moves[computer];
    console.log(computer);
    console.log(moves[computer]);
    console.log(move);
    switch(moves[computer]){
        case 'rock':
            switch(move){
                case 'rock':
                    message = "Rock vs Rock<br/>Tie";
                    ties++;
                    break;
                case 'paper':
                    message = 'Paper covers Rock<br/>Human Wins';
                    humanWins++;
                    break;
                case 'scissors':
                    message = 'Rock smashes Scissors<br/>Computer Wins';
                    computerWins++;
                    break;
            }
            break;
        case 'paper':
            switch(move){
                case 'rock':
                    message = "Paper covers Rock<br/>Computer Wins";
                    computerWins++;
                    break;
                case 'paper':
                    message = 'Paper vs Paper<br/>Tie';
                    ties++;
                    break;
                case 'scissors':
                    message = 'Scissors cut Paper<br/>Human Wins';
                    humanWins++;
                    break;
            }
            break;
        case 'scissors':
            switch(move){
                case 'rock':
                    message = "Rock smashes Scissors<br/>Human Wins";
                    humanWins++;
                    break;
                case 'paper':
                    message = 'Scissors cut Paper<br/>Computer Wins';
                    computerWins++;
                    break;
                case 'scissors':
                    message = 'Scissors vs Scissors<br/>Tie';
                    ties++;
                    break;
            }
            break;
    }
    var elComputerWins = document.getElementById('computerWins');
    elComputerWins.textContent = computerWins;
    var elTies = document.getElementById('ties');
    elTies.textContent = ties;
    var elHumanWins = document.getElementById('humanWins');
    elHumanWins.textContent = humanWins;
    var elOutput = document.getElementById('output');
    elOutput.innerHTML = message;
}