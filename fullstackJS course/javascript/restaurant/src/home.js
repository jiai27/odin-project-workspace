//follows step 7.1 of the restaurant page project in TOP: "put the contents of each 'tab' inside of its own module"

export function initHomeTab(){      //all html elements and styles go in here
    //HTML
    const content = document.querySelector("#content")

    let restaurantHeader = document.createElement("h2")
    restaurantHeader.textContent = "John Restaurant"

    //description block
    let restBlock = document.createElement("div")
    restBlock.classList.add("block")
    let restaurantDesc = document.createElement("p")
    restaurantDesc.textContent = "John Restaurant is the best all-around asian fusion restaurant, despite the name.."
    restaurantDesc.classList.add("block")

    //hours block
    let hourBlock = document.createElement("div")
    hourBlock.classList.add("block")
    let hourHeader = document.createElement("h3")
    hourHeader.classList.add("blockHead")
    hourHeader.textContent = "Hours"
    let hourDesc = document.createElement("ul")
    let hours = [
        "Sunday: 8am - 8pm",
        "Monday: 6am - 6pm",
        "Tuesday: 6am - 6pm",
        "Wednesday: 6am - 6pm",
        "Thursday: 6am - 10pm",
        "Friday: 6am - 10pm",
        "Saturday: 8am - 10pm"
    ]
    for (let i=0; i < 7; i++){ 
        let openItem = document.createElement("li")
        openItem.textContent = hours[i]
        hourDesc.appendChild(openItem)
    }
    hourBlock.appendChild(hourHeader)
    hourBlock.appendChild(hourDesc)

    //location block
    let locBlock = document.createElement("div")
    locBlock.classList.add("block")
    let locHeader = document.createElement("h3")
    locHeader.classList.add("blockHead")
    locHeader.textContent = "Location"
    let locDesc = document.createElement("p")
    locDesc.textContent = "123 Forest Drive, Forestville, Maine"
    locBlock.appendChild(locHeader)
    locBlock.appendChild(locDesc)



    //styles
    content.style.backgroundColor = "lightblue"
    content.style.display = "flex"
    content.style.flexDirection = "column"
    content.style.justifyContent = "center"
    content.style.alignItems = "center"

    content.appendChild(restaurantHeader)
    content.appendChild(restaurantDesc)

    content.appendChild(hourBlock)
    content.appendChild(locBlock)

    let blockItem = document.querySelectorAll(".block")
    blockItem.forEach(indBlock =>{
        indBlock.style.backgroundColor = "lightgrey"
        indBlock.style.margin = "30px"
    })

}