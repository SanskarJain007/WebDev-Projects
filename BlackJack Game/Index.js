let Cards=[];
let sum=0;
let hasBlackJack=false;
let isAlive=false;
let Message="";
let messageEl=document.getElementById("message-el");
let sumEl=document.getElementById("sum-el");
let cardEl=document.getElementById("card-el");

let player = {
    name: "Player",
    chips: 1785
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": ₹" + player.chips

function getRandomCard(){
    let randomNumber= Math.floor(Math.random()*13)+1;
    if(randomNumber>10){
        return 10
    }
    else if(randomNumber===1){
        return 11;
    }
    else{
        return randomNumber;
    }
}

function startGame() {
    isAlive=true;
    let firstCard=getRandomCard();
    let secondCard=getRandomCard();
    Cards=[firstCard, secondCard];
    sum=firstCard+secondCard;
    renderGame();
  }

function renderGame(){
    sumEl.textContent="Sum: "+ sum;
    cardEl.textContent="Cards: "
    for(let i=0; i<Cards.length; i++){
        cardEl.textContent+=Cards[i]+" ";
    }
    if(sum<=20){
        Message="Do you want to draw a new card?"
    }
    else if(sum===21){
        Message="Wohoo! You've a BlackJack."
        hasBlackJack=true;
    }
    else {
        Message="You're out of the game!"
        isAlive=false;
    }
    
    messageEl.textContent=Message;
}

function newCard(){
    if(isAlive===true || hasBlackJack===false){
        let card=getRandomCard();
        sum+=card;
        Cards.push(card);
        renderGame();
    }
    
}
