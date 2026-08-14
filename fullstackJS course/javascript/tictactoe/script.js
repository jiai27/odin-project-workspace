
console.log("start")

const Gameboard = (() => {                 //IIFE (constructor function?); Gameboard already created
    function createTile(gridPos){    //factory function
        console.log(`tile at ${gridPos} has been created`)
        return {
            id: gridPos,    //tuples don't exist natively, so we're using a grid position now
            pos: gridPos,   //note: pos changes, id does not
            occupied: false
        }
    }

    //make the gameboard
    function createBoard(){
        let boardArray = []
        for (let i=0; i < 9; i++){
                tile = createTile(i)
                boardArray.push(tile)
        }
        return boardArray
    }
    this.board = createBoard()
    console.log("gameboard initialized")
    console.log(this.board, "BOARD TYPE: ",typeof this.board)
    return this.board
})();

const gameLogic = (() =>{   //IIFE
    //---INITIALIZATION---
    const winConditions = [
        [0,1,2],    //rows
        [3,4,5],
        [6,7,8],
        [0,3,6],    //columns
        [1,4,7],
        [2,5,8],
        [0,4,8],    //diagonals
        [2,4,6]
    ]
    let occupied = []
    this.state = "start"         //other states include: turn1, turn2, gameover
    this.turn = 1;               //private variable
    function switchTurn(){       //private method
        if (turn === 1){
            turn = 2
        }
        else{
            turn = 1
        }
        console.log("changed turn to: ",this.turn)
    }

    function createPlayer(icon){    //factory function -> p1 = createPlayer(icon) etc.
        name = prompt("Enter name for the player: ");
        console.log(`Player ${name} entered the game. ICON: ${icon} | ${typeof currentMoves}`)



        return {
            name, 
            icon, 
            score: 0,
            currentMoves: []
        };
    }


    function checkWin(player){
        let winCount = 0
        console.log(`checking if ${player.name} won`)
        //check ties
        //console.log(player.currentMoves)
        for (let i=0; i < winConditions.length; i++){       //check wins
            console.log(player.currentMoves, winConditions[i])
            winCount = 0
            for (let j=0; j < winConditions[i].length; j++){
                //console.log(j, player.currentMoves, winConditions[i][j])
                if (player.currentMoves.includes(winConditions[i][j]) == true){
                    winCount +=1
                    continue
                }
            }
            if (winCount == 3){
                console.log(`Player ${player.name} has won the game!`)
                this.state = 'gameover'
                return true
            }
        }

        if (occupied.length == 9){
            console.log("reached a tie, resetting game..")
            resetGame()
            return false
        }
    }

    function resetGame(){
        console.log("reset game")
        occupied = []
        this.state = "start"
        let turnText = document.querySelector(".turnStatus")
        turnText.textContent = "Turn: X goes first"
        this.turn = 1
        p1.currentMoves = []
        p2.currentMoves = []

        let score = document.querySelector(".score")
        score.textContent = ` ${p1.name}: ${p1.score} | ${p2.name}: ${p2.score}`

        let tileContents = document.querySelectorAll("body .gameDisplay .gameTiles")
        tileContents.forEach(element => {
            element.textContent = element.id
            Gameboard[element.id].occupied = false
        }); 
    }

    function clickTile(genericTile){        //genericTile is the visual tile, but is now connected via the same id as the Gameboard array indexes

        let score = document.querySelector(".score")
        if (Gameboard[genericTile.id].occupied == true){
            turnText.textContent = "Square is occupied, try something else."
        }
        else{
            Gameboard[genericTile.id].occupied = true
            if (turn == 1){
                turnText.textContent = "O's Turn"
                p1.currentMoves.push(parseInt(genericTile.id))
                occupied.push(genericTile.id)
                genericTile.textContent = "X"
                win1 = checkWin(p1)
                if (win1 == true){
                    p1.score++;
                    score.textContent = ` ${p1.name}: ${p1.score} | ${p2.name}: ${p2.score}`
                    turnText = `${p1.name} wins!`
                    resetGame()
                }
                else{
                    switchTurn()
                }
            }
            else if (turn == 2){
                turnText.textContent = "X's Turn"
                p2.currentMoves.push(parseInt(genericTile.id))
                occupied.push(genericTile.id)
                genericTile.textContent = "O"
                win2 = checkWin(p2)
                if (win2 == true){
                    p2.score++;
                    score.textContent = ` ${p1.name}: ${p1.score} | ${p2.name}: ${p2.score}`
                    turnText = `${p2.name} wins!`
                    resetGame()
                }

                switchTurn()
            }
        }
        return
    }


    //make the two players
    p1 = createPlayer("X")      //turn 1
    p2 = createPlayer("O")      //turn 2

    turnText = document.querySelector("h2")
    
    const resetButton = document.querySelector("button")
    resetButton.addEventListener('click', ()=>{resetGame()})

    //display the gameboard
    const displayContainer = document.querySelector("div")
    for (let i=0; i < Gameboard.length; i++){
        //console.log(i, Gameboard[i], typeof Gameboard[i])
        let tile = document.createElement("button")
        tile.classList.add("gameTiles")
        tile.setAttribute("id",i)
        tile.textContent = i
        tile.addEventListener('click', ()=>{clickTile(tile)})
        displayContainer.appendChild(tile)
    }

})();
