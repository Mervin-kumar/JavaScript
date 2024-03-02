'use strict';
let number=Math.random()*20+1
let score=20;
let secreateNumber=Math.trunc(number)
let highscore=0;
console.log("secreateNumber is :",secreateNumber)
const displayMessage=(Message)=>{
    document.querySelector('.message').textContent=Message;
}
document.querySelector('.check').addEventListener('click', ()=>{
    const guess=Number(document.querySelector('.guess').value)
    if(!guess){
        document.querySelector('.message').textContent='No Value !'
    }
    else if(guess!==secreateNumber){
        if(score>0){
           displayMessage(guess>secreateNumber?'Too high📈':'Too low📉')
            score--
            document.querySelector('.score').textContent=score
        }
        else{
           displayMessage('You lost the game 🤯')
        } 
    }
    else if(guess===secreateNumber){
        document.querySelector('.number').textContent=secreateNumber
        displayMessage('Correct Answer✅')
        document.querySelector('body').style.backgroundColor=' #60b347';
        document.querySelector('.number').style.width='30rem';  
        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }
    }
})
document.querySelector('.again').addEventListener('click',()=>{
document.querySelector('body').style.backgroundColor='#222'
document.querySelector('.number').style.width='15rem';  
document.querySelector('.number').textContent='?';
document.querySelector('.guess').value='';
displayMessage('Start guessing...')
score=20;
document.querySelector('.score').textContent=score
number=Math.random()*20+1
secreateNumber=Math.trunc(number)
console.log("secreateNumber is :",secreateNumber) 
})
