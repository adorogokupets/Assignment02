let coinFlip = Math.round(Math.random())
let choice = prompt('Make your choise, enter heads or tails')

if (coinFlip < 1){
    if (choice === 'heads'){
        alert('The flip was heads and you chose heads...you win!')

    }
    if (choice === 'tails') {
        alert('The flip was heads but you chose tails...you lose!')
    }

}else {
    if (choice === 'heads'){
        alert('The flip was tails but you chose heads...you lose!')

    }
    if (choice === 'tails') {
        alert('The flip was tails and you chose tails...you win!')
    }
}