console.log("--start--")

/** Pseudocode
 *   welcome the player and prompt the start of the game
 *   get the computer's choice
 *   prompt the player for their choice
 *   determine the matchup result 
 *   print result message - and keep score
 *   loop again
 */

function getComputerChoice(){
    /*  purpose:        makes the computer's choice of randomly choosing one of rock, paper or scissors
     *  parameters:     none
        returns:        computer's choice one of rps
        0: rock, 1: paper, 2: scissors
     */
    let choice = ""
    let number = Math.floor(Math.random() * 3)
    switch(number){
        case 0:
            choice = "rock"
            break;
        case 1:
            choice = "paper"
            break;
        case 2:
            choice = "scissors"
            break;
    }
    return choice
}
//console.log("computer: " + getComputerChoice());        //works

function getHumanChoice(){
    /** purpose:        extracts the human's choice of one of rock paper or scissors
     *  parameters:     none
     *  returns:        human's choice of rps
     * note: does not error check
     */
    let choice = prompt("Your turn: rock, paper or scissors?")
    return choice
}

//console.log("human: " + getHumanChoice())


function playRound(cInput, pInput){
    /**     purpose:    runs the logic for one round of rock paper scissors, determines winner, prints it and updates score
     *      parameters: player and computer input
     *      returns:    0 if computer won, 1 if player won, 2 if it was a tie
     */
    console.log("--GAME--")
    console.log("Computer chose: " + cInput)
    console.log("Player chose: " + pInput)

    //matchup result
    if (cInput == pInput){          
        console.log("Tie! No points awarded to either player.")
        return
    }
        else if (cInput == "rock"){
            if (pInput == "paper"){
                console.log(`Player wins! ${pInput} beats ${cInput}`)
                humanScore += 1
            }
            else{
                console.log(`Computer wins! ${cInput} beats ${pInput}`)
                computerScore += 1
            }
        }
        else if (cInput == "paper"){
            if (pInput == "scissors"){
                console.log(`Player wins! ${pInput} beats ${cInput}`)
                humanScore += 1
            }
            else{
                console.log(`Computer wins! ${cInput} beats ${pInput}`)
                computerScore += 1
            }
        }
        else if (cInput == "scissors"){
            if (pInput == "rock"){
                console.log(`Player wins! ${pInput} beats ${cInput}`)
                humanScore += 1
            }
            else{
                console.log(`Computer wins! ${cInput} beats ${pInput}`)
                computerScore += 1
            }
        }
    

    console.log(`Player Score: ${humanScore}`)
    console.log(`Computer Score: ${computerScore}`)
}

let humanScore = 0;
let computerScore = 0;

function playGame(rounds){
    /**     purpose:    play a set number of rounds of rock paper scissors and show scores
     *      parameters: rounds - integer to specify number of rounds to be played
     *      returns:    none
     */

    humanScore = 0;
    computerScore = 0;

    for (let i=0; i<rounds; i+=1){
        let computerChoice = getComputerChoice()
        let humanChoice = getHumanChoice()

        computerChoice = computerChoice.toLowerCase()
        humanChoice = humanChoice.toLowerCase()

        playRound(computerChoice, humanChoice)
    }
}

playGame(5)


