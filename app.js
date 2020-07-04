/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result gets added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
let randomNum1 = 0;
let randomNum2 = 0;
let total = 0;

let btnroll = document.getElementById("btn-roll").onclick = function startNewGame() {
     randomNum1 = Math.floor(Math.random() * 6) + 1;
     randomNum2 = Math.floor(Math.random() * 6) + 1;
    let diceImage1 = document.getElementById("dice").src = "dice-" + randomNum1 + ".png";
    let diceImage2 = document.getElementById("dice2").src = "dice-" + randomNum2 + ".png";
    if (randomNum1 !== 1 && randomNum2 !== 1) {
        let total = (Number(randomNum1) + Number(randomNum2));
        console.log(Number(total));
        return total;

    }
    else {
        console.log("You lose");
        return 0;
    };
};
console.log('total', total);
let playerOne = document.getElementById("score-0").innerText = Number(total);

/*let dice1 = randomNum1;
let dice2 = randomNum2;
let diceRolled = () => {
    if (randomNum1 !== 1 && randomNum2 !== 1) {
        return (Number(randomNum1) + Number(randomNum2));
      
    }
    else {
        console.log("You lose");
        return 0;
    };
};

    //console.log('dice1', dice1);
    //console.log('dice2', dice2);



//btnRoll.addEventListener('click', diceRolled);
*/
