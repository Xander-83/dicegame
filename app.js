/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result gets added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var btnRoll = document.getElementById("btn-roll");
 

function diceRolled (dice1, dice2) {
        dice1 = Math.floor(Math.random() * 6) + 1;  
        dice2 = Math.floor(Math.random() * 6) + 1;  
        return dice1, dice2;
        //console.log('dice1', dice1);
       //console.log('dice2', dice2);
    };
  diceRolled(dice1, dice2);

function score()  {
    if( dice1 !== 1 && dice2 !== 1) {
        Roundup (Number(dice1) + Number(dice2)); 
    }
        else {
            console.log("You lose");
        }
    };
    
//console.log(diceRolled());





btnRoll.addEventListener('click', diceRolled);