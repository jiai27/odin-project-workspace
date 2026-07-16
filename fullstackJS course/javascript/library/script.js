console.log("test")

const myLibrary = [];
const displaySpace = document.querySelector("displayspace")
const list = document.querySelector("ul")

function Book(title, author, pages, read){
    if (!new.target){
        console.log("you must use the new operator to make a new instance of this object")
    }

    this.title = title      //string
    this.author = author    //string
    this.pages = pages      //int
    this.read = read        //boolean
    this.id = crypto.randomUUID()

    this.info = function info(){        //no parameters
        if (this.read == false){
            // console.log(`${this.title} by ${this.author}, ${this.pages} pages, not read yet`)
            return `${this.title} by ${this.author}, ${this.pages} pages, not read yet`
        }
        else{
            // console.log(`${this.title} by ${this.author}, ${this.pages} pages, has been read`)
            return `${this.title} by ${this.author}, ${this.pages} pages, has been read`
        }
    }

    this.checkRead = function checkRead(){
        if (this.read == false){
            this.read = true
        }
        else{
            this.read = false
        }
    }
}

function addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead){
    let thisbook = new Book(bookTitle, bookAuthor, bookPages, bookRead)
    myLibrary.push(thisbook)
}

function seeBooks(){    
    let child = document.querySelectorAll("li")
    let ulList = document.querySelector("ul")   //clear the list

    child.forEach(listItem=>{
        ulList.removeChild(listItem)
    })

    for (let i=0; i < myLibrary.length; i++){
        let bookReport = `Book #${i+1}: ${myLibrary[i].title}, by ${myLibrary[i].author}, ${myLibrary[i].pages} pages, Read?: ${myLibrary[i].read}, ID: ${myLibrary[i].id}`
        let newElem = document.createElement("li")
        newElem.textContent = bookReport
        newElem.book = myLibrary[i]

        let delButton = document.createElement("button")
        delButton.className = "delButton"
        delButton.textContent = "Delete"
        newElem.appendChild(delButton)

        let readCheck = document.createElement("button")
        readCheck.className = 'readCheck'
        readCheck.textContent = "Check Read"
        newElem.appendChild(readCheck)

        newElem.id = myLibrary[i].id 

        list.appendChild(newElem)
    }
}

const addButton = document.querySelector("button")
const submitButton = document.querySelector(".submitButton")

addButton.addEventListener('click',() =>{
    console.log("adding book")
})

list.addEventListener('click', (event)=>{
    let thisItem = event.target.closest("li")
    let stepUpList = thisItem.closest("ul")
    if (event.target.classList.contains('readCheck')){
        console.log("check read")
        if (thisItem.read == false){
            thisItem.read = true
        }
        else{
            thisItem.read = false
        }
        seeBooks()
    }

    if (event.target.classList.contains("delButton")){
        console.log("delete this")
        stepUpList.removeChild(thisItem)
    }    
})

submitButton.addEventListener('click', (event) =>{
    event.preventDefault();

    let newTitle = document.querySelector("input#booktitle")
    let newAuthor = document.querySelector("input#bookauthor")
    let newPages = document.querySelector("input#pagenum")
    let readBool = document.querySelector("input#readornot")

    addBookToLibrary(newTitle.value, newAuthor.value, newPages.value, readBool.checked)
    console.log("successfully added new book")

    // clear the form and close window
    let newForm = document.querySelector(".bookform")
    newForm.reset()
    let dialogBox = document.querySelector("#addingBook")
    dialogBox.close()

    seeBooks()
})


addBookToLibrary("surviving minecraft", "J.K Rowling", 234, false)
seeBooks()