//all necessary operator functions
const add = (a,b) => {return (a+b)};
const subtract = (a,b) => {return (a-b)}
const multiply = (a,b) => {return (a*b)}
const divide = (a,b) => {return (a/b)}


//make calculator display
const calc = document.querySelector(".Calculator")
let display = document.createElement("h4")
display.textContent = "0"
display.classList.add("display")
calc.appendChild(display)


function operate(op, n1, n2){
    switch (op){
        case "+":
            return add(n1,n2)
        case "-":
            return subtract(n1,n2)
        case "*":
            return multiply(n1,n2)
        case "/":
            if (n2 == 0){
                return "Error"
            }
            else{
                return divide(n1,n2)
            }
    }
}

//make digit buttons
const digHolder = document.querySelector(".digits")
for (let i=0; i<10; i++){
    let digit = document.createElement("button")
    digit.textContent = `${i}`
    digit.classList.add("digOps")

    console.log(`added ${i}`)
    digHolder.appendChild(digit)
}

//make operator buttons
const opHolder = document.querySelector(".ops")
let addButton = document.createElement("button")
addButton.textContent = "+"
addButton.classList.add("digOps")

let subButton = document.createElement("button")
subButton.textContent = "-"
subButton.classList.add("digOps")

let multButton = document.createElement("button")
multButton.textContent = "*"
multButton.classList.add("digOps")

let divButton = document.createElement("button")
divButton.textContent = "/"
divButton.classList.add("digOps")

let evalButton = document.createElement("button")
evalButton.textContent = "="
evalButton.classList.add("digOps")
evalButton.style.backgroundColor = "cornflowerblue";

let clearButton = document.createElement("button")
clearButton.textContent = "C"
clearButton.classList.add("digOps")
clearButton.style.backgroundColor = "#FFCC00"

opHolder.appendChild(clearButton)
opHolder.appendChild(addButton)
opHolder.appendChild(subButton)
opHolder.appendChild(multButton)
opHolder.appendChild(divButton)
opHolder.appendChild(evalButton)


//--LOGIC NEEDS WORK---------------------

let previousInput=""
let currentInput=""
let operator = ""
let state = "first"              //either building previous input (first) or building second input (second)
let lastInput = ""

function buildInput(digit){
    if (lastInput == "="){      //handle clearing after a new result
        clearCalc()
    }

    lastInput = digit
    if (state == "first"){
        previousInput += digit
        display.textContent = previousInput
    }
    else if (state == "second"){
        currentInput += digit
        display.textContent = currentInput
    }
    console.log(previousInput, currentInput, state)
}

function takeOperator(inputOp){
    if (lastInput == "+" || lastInput == "-" || lastInput == "*" || lastInput == "/"){      //only use the most recently pressed operator
        operator = inputOp
        return
    }

    lastInput = inputOp
    if (state == "first" && inputOp != "="){
        operator = inputOp
        state = "second"
    }
    
    else if (state == "second" && inputOp != "="){
        console.log("secondary op")
        result = operate(operator,Number(previousInput),Number(currentInput))       //use the previous operator
        console.log(Number(previousInput),Number(currentInput),operator, result)
        display.textContent = result
        previousInput=result
        currentInput=""
        operator = inputOp
    }
}

function clearCalc(){
    previousInput = ""
    currentInput = ""
    operator=""
    state="first"
    display.textContent="0"
    console.log("cleared")
}

function evaluateExpression(){
    if (state == "first"){              //deal with early input of "="
        display.textContent = Number(previousInput)
        lastInput = "="
    }

    else if (state=="second"){
        lastInput = "="
        result = operate(operator,Number(previousInput),Number(currentInput))
        console.log(result)
        display.textContent = result
    }
}

//digit input logic
const num = document.querySelectorAll(".buttons .digits .digOps")   //selects all digits
num.forEach(digit =>{
    digit.addEventListener('click', () => buildInput(digit.textContent))
})

//operator input logic
const operatorButton = document.querySelectorAll(".buttons .ops .digOps")   //selects all operators
operatorButton.forEach(opPress =>{
    opPress.addEventListener('click', () => takeOperator(opPress.textContent))  //needs its own function
})

//equals logic
evalButton.addEventListener('click', () => evaluateExpression())  //needs its own function



//clear logic
clearButton.addEventListener('click', ()=> clearCalc())


//--LOGIC NEEDS WORK---------------------








