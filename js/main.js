//
var moves = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

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
    return getRndInteger(0,4);      // increased number from 2 for additional options
}

//
function playerClick(move){
    var message;
    var computer = computerMove();
    var elComputer = document.getElementById('computer');
    // clear all background colors, and set select one
    for(var i = 0; i < 5; i++){     // changed i < 3 to 5 to reflect lizard and spock
        var el = document.getElementById(moves[i]);
        if(move === moves[i])
        {
            el.style.backgroundColor = 'lightgreen';
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
        case 'rock':            // outcomes if the computer chooses rock
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
                case 'lizard':
                    message = 'Rock crushes lizard <br/>Computer Wins';
                    computerWins++;
                    break;
                case 'spock':
                    message = "Spock vaporizes rock <br/>Human Wins";
                    humanWins++;
                    break;

            }
            break;
        case 'paper':           // outcomes if the computer chooses paper
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
                case 'lizard':
                    message = 'Lizard eats paper<br/>Human Wins';
                    humanWins++;
                    break;
                case 'spock':
                    message = "Paper disproves Spock <br/>Computer Wins";
                    computerWins++;
                    break;
            }
            break;
        case 'scissors':        // outcomes if the computer chooses scissors
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
                case 'lizard':
                    message = 'Scissors decapitates Lizard<br/>Computer Wins';
                    computerWins++;
                    break;
                case 'spock':
                    message = "Smock smashes Scissors <br/>Human Wins";
                    humanWins++;
                    break;    
            }
            break;
        case 'lizard':        // outcomes if the computer chooses lizard
            switch(move){
                case 'rock':
                    message = "Rock crushes Lizard<br/>Human Wins";
                    humanWins++;
                    break;
                case 'paper':
                    message = 'Lizard eats Paper<br/>Computer Wins';
                    computerWins++;
                    break;
                case 'scissors':
                    message = 'Scissors decapitates Lizard<br/>Human Wins';
                    humanWins++;
                    break;
                case 'lizard':
                    message = 'Lizard vs Lizard<br/>Tie';
                    ties++;
                    break;
                case 'spock':
                    message = "Lizard poisons Spock <br/>Computer Wins";
                    computerWins++;
                    break;    
            }
            break;
        case 'spock':        // outcomes if the computer chooses spock
            switch(move){
                case 'rock':
                    message = "Spock vaporizes rock<br/>Computer Wins";
                    computerWins++;
                    break;
                case 'paper':
                    message = 'Paper disproves Spock<br/>Human Wins';
                    humanWins++;
                    break;
                case 'scissors':
                    message = 'Spock smashes Scissors<br/>Computer Wins';
                    computerWins++;
                    break;
                case 'lizard':
                    message = 'Lizard poisons Spock<br/>Human Wins';
                    humanWins++;
                    break;
                case 'spock':
                    message = "Spock vs Spock <br/>Tie";
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