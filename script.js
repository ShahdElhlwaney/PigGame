'use strict';
const diceEl=document.querySelector('.dice');
const btnDice=document.querySelector('.btn--roll');
const btnNew=document.querySelector('.btn--new');
const btnHold=document.querySelector('.btn--hold');
const score0El=document.querySelector('.score-player0');
const score1El=document.querySelector('.score-player1');
const currentScore0El=document.querySelector('.currentscore-player0');
const currentScore1El=document.querySelector('.currentscore-player1');


document.querySelector('.btn--roll').addEventListener('click',
    function (){
        const randomNumber=Math.trunc(Math.random()*6)+1;
        diceEl.src=`dice-${randomNumber}.png`;
        diceEl.classList.remove('hidden');
    });
    
