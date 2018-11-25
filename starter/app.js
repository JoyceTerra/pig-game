/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/
let scores, roundScore, activePlayer

scores = [0, 0]
roundScore = 0
activePlayer = 0

//document.querySelector('#current-' + activePlayer).textContent = dice //selects the id and change text - SETTER
// OR document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>' 
//let x = document.querySelector('#score-1').textContent //to read the value on the console - GETTER

document.querySelector('.dice').style.display = 'none'
document.getElementById('score-0').textContent = '0'
document.getElementById('score-1').textContent = '0'
document.getElementById('current-0').textContent = '0'
document.getElementById('current-1').textContent = '0'


document.querySelector('.btn-roll').addEventListener('click', function() {
    //1. Random number
    let dice = Math.floor(Math.random() * 6) + 1
    //2. Display result
    let diceDOM = document.querySelector('.dice')
    diceDOM.style.display = 'block'
    diceDOM.src = 'dice-' + dice +'.png'//to change the src of the <img>
    //3. Update the round score IF the rolled number was not 1
    if(dice !== 1) {
        //Add score
        roundScore += dice
        document.querySelector('#current-' + activePlayer).textContent = roundScore
    }else{
        //Next player
    nextPlayer()
    }
})//two args = event type and fucntion that will be called as soon as the event happens
//calback function = a function that is not called by us but by another function
// anonymous function = it doesnt have a name and cannot be reused

document.querySelector('.btn-hold').addEventListener('click', function() {
    //Add the current score to global score
    scores[activePlayer] += roundScore

    //Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]
    
    //Check if player won the game
    if(scores[activePlayer] >= 15) {
        document.querySelector('#name-' +activePlayer).textContent = 'Winner!'
        document.querySelector('.dice').style.display = 'none'
        document.querySelector('.player-' + activePlayer+ '-panel').classList.add('winner')
        document.querySelector('.player-' + activePlayer+ '-panel').classList.remove('active')

    }else{
    
    nextPlayer()
    }
})

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
        roundScore = 0
        
        document.getElementById('current-0').textContent = '0'
        document.getElementById('current-1').textContent = '0'

        document.querySelector('.player-0-panel').classList.toggle('active')
        document.querySelector('.player-1-panel').classList.toggle('active')
        // document.querySelector('.player-0-panel').classList.remove('active')
        // document.querySelector('.player-1-panel').classList.add('active')
        document.querySelector('.dice').style.display = 'none'
}