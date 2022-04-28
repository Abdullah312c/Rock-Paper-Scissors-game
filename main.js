let playerImg = document.querySelector('#playerImg');
let computerImg = document.querySelector('#computerImg');
let btn1 = document.querySelector('#rock');
let btn2 = document.querySelector('#paper');
let btn3 = document.querySelector('#scissors');
let result = document.querySelector('#result');

var count = 0;
var match = "";
var playerRock = 0;
var playerPaper = 0;
var playerScissors = 0;
btn1.addEventListener('click', () => {
    playerImg.src = 'images/big rock.jpg';
    playerRock = 1;
    computerTurn();
    checkWinner();
    matchResult.innerText = match;
    result.innerText = "Result: " + count;
    playerRock = 0;
    playerPaper = 0;
    playerScissors = 0;
});

btn2.addEventListener('click', () => {
    playerImg.src = 'images/big paper.jpg';
    playerPaper = 1;
    computerTurn();
    checkWinner();
    matchResult.innerText = match;
    result.innerText = "Result: " + count;
    playerRock = 0;
    playerPaper = 0;
    playerScissors = 0;
});

btn3.addEventListener('click', () => {
    playerImg.src = 'images/big scissors.jpg';
    playerScissors = 1;
    computerTurn();
    checkWinner();
    matchResult.innerText = match;
    result.innerText = "Result: " + count;
    playerRock = 0;
    playerPaper = 0;
    playerScissors = 0;
});

function computerTurn() {

    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum) {

        case 1:
            computerImg.src = 'images/big rock.jpg';
            playerRock = 2;
            break;
        case 2:
            computerImg.src = 'images/big paper.jpg';
            playerPaper = 2;
            break;
        case 3:
            computerImg.src = 'images/big scissors.jpg';
            playerScissors = 2;
            break;
    }
}

function checkWinner() {
    
    if(playerRock == 1) {
        if(playerScissors == 2) {

            match = "You Win!";
            ++count;
        }
            
        else if(playerPaper == 2) {

            match = "You Lose!";
            --count;
        }
    }
    else if(playerPaper == 1) {
        if(playerRock == 2) {

            match = "You Win!";
            ++count;
        }
        else if(playerScissors == 2) {

            match = "You Lose!";
            --count;
        }
    }
    else if(playerScissors == 1) {
        if(playerPaper == 2) {

            match = "You Win!";
            ++count;
        }
        else if(playerRock == 2) {

            match = "You Lose!";
            --count;
        }
    }

    else
        match = "Draw!";
        
}