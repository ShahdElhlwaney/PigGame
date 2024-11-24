'use strict';
const diceEl=document.querySelector('.dice');
const btnDice=document.querySelector('.btn--roll');
const btnNew=document.querySelector('.btn--new');
const btnHold=document.querySelector('.btn--hold');
const score0El=document.querySelector('.score-player0');
const score1El=document.querySelector('.score-player1');
const currentScore0El=document.querySelector('.currentscore-player0');
const currentScore1El=document.querySelector('.currentscore-player1');
const player0El=document.querySelector('.player0');
const player1El=document.querySelector('.player1');
let playerActive,currentScore,totalScore,playing;

const init=function ()
{
    playerActive=0;
    currentScore=0;
    totalScore=[0,0];
    playing=true;
    score0El.textContent=0;
    score1El.textContent=0;
    currentScore0El.textContent=0;
    currentScore1El.textContent=0;
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('playerActive');
    player1El.classList.remove('playerActive');
}
function SwitchPlayer()
{
    document.querySelector(`.currentscore-player${playerActive}`).textContent=0;
            currentScore=0;
            playerActive=playerActive===0?1:0;
            player0El.classList.toggle('playerActive');
            player1El.classList.toggle('playerActive');
}
init();
btnDice.addEventListener('click',
    function (){
        if(playing)
        {
            const dice=Math.trunc(Math.random()*6)+1;
            diceEl.src=`dice-${dice}.png`;
            diceEl.classList.remove('hidden');
            if(dice!==1)
            {
                currentScore+=dice;
                document.querySelector(`.currentscore-player${playerActive}`).textContent=currentScore;
            }
            else
            {
                SwitchPlayer();
            }
        }
    });
btnHold.addEventListener('click',function ()
{
    if(playing)
    {
        totalScore[playerActive]+= currentScore;
        document.querySelector(`.score-player${playerActive}`).textContent=totalScore[playerActive];
        if(totalScore[playerActive]>=20)
        {
          playing=false;
          document.querySelector('.playerActive').classList.add('player--winner');
          diceEl.classList.add('hidden');
        }
        else{
            SwitchPlayer();
        }
    }    
});
btnNew.addEventListener('click',init);

