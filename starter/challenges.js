let scores, roundScore, activePlayer, gamePlaying, lastDice

init()
//document.querySelector('#current-' + activePlayer).textContent = dice //selects the id and change text - SETTER
// OR document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>' 
//let x = document.querySelector('#score-1').textContent //to read the value on the console - GETTER

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
          //1. Random number
        let dice1 = Math.floor(Math.random() * 6) + 1
        let dice2 = Math.floor(Math.random() * 6) + 1

        //2. Display result
        document.getElementById('dice-1').style.display = 'block'
        document.getElementById('dice-2').style.display = 'block'
        document.getElementById('dice-1').src = 'dice-' + dice1 +'.png'//to change the src of the <img>
        document.getElementById('dice-1').src = 'dice-' + dice2 +'.png'
        
        //3. Update the round score IF the rolled number was not 1
        if(dice1 !== 1 && dice2 !== 1) {
            //Add score
            roundScore += dice1 + dice2
            document.querySelector('#current-' + activePlayer).textContent = roundScore
        }else{
            //Next player
        nextPlayer()
        }
        // if(dice === 6 && lastDice === 6) {
        //     //Player loses score
        //     scores[activePlayer] = 0
        //     document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer] //or = '0'
        //     nextPlayer()
        // }else if(dice !== 1) {
        //     //Add score 
        //     roundScore += dice
        //     document.querySelector('#current-' + activePlayer).textContent = roundScore
        // }else{
        //     //Next player
        // nextPlayer()
        // }
        // lastDice = dice

    }
})//two args = event type and fucntion that will be called as soon as the event happens
//calback function = a function that is not called by us but by another function
// anonymous function = it doesnt have a name and cannot be reused

document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying) {
        //Add the current score to global score
        scores[activePlayer] += roundScore

        //Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]

        let input = document.querySelector('.final-score').value
        

        //Undefined, 0, null or "" are coerced to false. Anything else it true
        if(input) {
            winningScore = input
        }else{
            winningScore = 100
        }
        
        //Check if player won the game
        if(scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' +activePlayer).textContent = 'Winner!'
            document.getElementById('dice-1').style.display = 'none'
            document.getElementById('dice-2').style.display = 'none'
            document.querySelector('.player-' + activePlayer+ '-panel').classList.add('winner')
            document.querySelector('.player-' + activePlayer+ '-panel').classList.remove('active')
            gamePlaying = false
        }else{
         //Next player
        nextPlayer()
        }
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
        document.getElementById('dice-1').style.display = 'none'
        document.getElementById('dice-2').style.display = 'none'}

document.querySelector('.btn-new').addEventListener('click', init)

function init() {
    scores = [0, 0]
    activePlayer = 0
    roundScore = 0
    gamePlaying = true

    document.getElementById('dice-1').style.display = 'none'
    document.getElementById('dice-2').style.display = 'none'

    document.getElementById('score-0').textContent = '0'
    document.getElementById('score-1').textContent = '0'
    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'
    document.getElementById('name-0').textContent = 'Player 1!'
    document.getElementById('name-1').textContent = 'Player 2!'
    document.querySelector('.player-0-panel').classList.remove('winner')
    document.querySelector('.player-1-panel').classList.remove('winner')
    document.querySelector('.player-0-panel').classList.remove('active')
    document.querySelector('.player-1-panel').classList.remove('active')
    document.querySelector('.player-0-panel').classList.add('active')
}