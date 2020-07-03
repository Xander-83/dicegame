/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result gets added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
//join the zoom meeting. meeting room 2015192899

let btnRoll = document.getElementById("btn-roll");


let randomNum1 = Math.floor(Math.random() * 6) + 1;
let randomNum2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNum1, randomNum2);

let diceImage1 = document.getElementById("dice").src = "dice-" + randomNum1 +".png";
let diceImage2 = document.getElementById("dice2").src = "dice-" + randomNum2 + ".png";


let diceRolled = () => {   
    let dice1 = randomNum1;
    let dice2 = randomNum2;

    console.log('dice1', randomNum1);
    console.log('dice2', randomNum2);
};
 
diceRolled();

function score(dice1, dice2) {
    if (randomNum1 !== 1 && randomNum2 !== 1) {
        var roundUp = (Number(randomNum1) + Number(randomNum2));
        console.log(roundUp);
    } else {
        console.log("You lose");
    }
};

//console.log(diceRolled());





btnRoll.addEventListener('click', diceRolled);