console.log("test")


// write a constructor for book

function Book(title, author, pages, read){
    if (!new.target){
        console.log("you must use the new operator to make a new instance of this object")
    }

    this.title = title      //string
    this.author = author    //string
    this.pages = pages      //int
    this.read = read        //boolean

    function info(){        //no parameters
        if (this.read == false){
            // console.log(`${this.title} by ${this.author}, ${this.pages} pages, not read yet`)
            return `${this.title} by ${this.author}, ${this.pages} pages, not read yet`
        }
        else{
            // console.log(`${this.title} by ${this.author}, ${this.pages} pages, has been read`)
            return `${this.title} by ${this.author}, ${this.pages} pages, has been read`
        }
    }
}

// to check prototype:
