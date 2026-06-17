    
// regular logic upon startup
const cont = document.querySelector(".container")
for (let i=0; i < 16; i++){
    for (let j=0; j < 16; j++){
        let square = document.createElement("div")
        cont.appendChild(square)
        roundDim = 480/16
        let dim = String(roundDim + "px")
        square.style.width = dim
        square.style.height = dim
        console.log("added square")
        square.classList.add("box")
    }
}

const hover = document.querySelectorAll(".container .box")
hover.forEach(box =>{
    box.addEventListener('mouseover', ()=>{
        box.classList.add("change")
    })
})

// function logic for recreating a new grid
function createGrid(size){
    // make the grid
    const cont = document.querySelector(".container")
    for (let i=0; i < size; i++){
        for (let j=0; j < size; j++){
            let square = document.createElement("div")
            cont.appendChild(square)
            roundDim = Math.round(480/size)
            let dim = String(roundDim + "px")

            square.style.width = dim
            square.style.height = dim
            square.classList.add("box")
            console.log("new square")
        }
    }
    
    // logic for the square scribbler
    const hover = document.querySelectorAll(".container .box")
    hover.forEach(box =>{
        box.addEventListener('mouseover', ()=>{
            box.classList.add("change")
        })
    })
}

// button logic for making a new grid
const button = document.querySelector("button")
button.addEventListener('click', ()=>{
    size = prompt("How big do you want the new grid? (max: 100)")

    if (size <= parseInt(100)){
        let cont = document.querySelector(".container")
        if (cont){
            cont.replaceChildren()
        }
        createGrid(size)
    }
    else{
        console.log("ERROR: too large or small of a size")
    }
})


