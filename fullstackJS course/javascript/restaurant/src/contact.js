//follows step 7.1 of the restaurant page project in TOP: "put the contents of each 'tab' inside of its own module"

export function initContactTab(){      //all html elements and styles go in here
    console.log("contact info displayed")
    //HTML
    const content = document.querySelector("#content")

    let contactBlock = document.createElement("div")

    let contactHeader = document.createElement("h2")
    contactHeader.textContent = "Contact Us"

    let contacts = document.createElement("ul")

    let peopleName = ['Mama Bear', 'Papa Bear', 'Baby Bear']
    let peopleTitle = ['Chef', 'Manager', 'Waiter']
    let phones = ["555-555-5554", '555-555-5555', '555-555-5556']
    let emails = ["totallyRealEmail@notFake.com","perfectlyRealEmail@notFake.com", "totallyRealEmail@notFake.com"]
   
    for (let i=0; i < peopleName.length; i++){
        let peopleItem = document.createElement("li")
        peopleItem.classList.add("block")

        let contName = document.createElement("h5")
        contName.textContent = peopleName[i]
        let contInfo = document.createElement("p")
        contInfo.textContent = `
        ${peopleTitle[i]}
        ${phones[i]}
        ${emails[i]}`
        peopleItem.appendChild(contName)
        peopleItem.appendChild(contInfo)

        contacts.appendChild(peopleItem)
    }

    contactBlock.appendChild(contactHeader)
    contactBlock.appendChild(contacts)

    //styles
    content.style.backgroundColor = "lightblue"
    content.style.display = "flex"
    content.style.flexDirection = "column"
    content.style.justifyContent = "center"
    content.style.alignItems = "center"

    content.appendChild(contactBlock)


    let blockItem = document.querySelectorAll(".block")
    blockItem.forEach(indBlock =>{
        indBlock.style.backgroundColor = "lightgrey"
        indBlock.style.margin = "30px"
    })

}


