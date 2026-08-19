//append to the div
export function initPage(){
    console.log("initializing page")
    const content = document.querySelector("#content")
    let restaurantHeader = document.createElement("h2")
    restaurantHeader.textContent = "John Restaurant"
    content.appendChild(restaurantHeader)

    let restaurantDesc = document.createElement("p")
    restaurantDesc.textContent = "John Restaurant is the best all-around asian fusion restaurant, despite the name.."
    content.appendChild(restaurantDesc)
}


