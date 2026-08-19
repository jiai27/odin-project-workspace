//follows step 7.1 of the restaurant page project in TOP: "put the contents of each 'tab' inside of its own module"

export function initMenuTab(){      //all html elements and styles go in here
    //HTML
    const content = document.querySelector("#content")

    let menuHeader = document.createElement("h2")
    menuHeader.textContent = "Menu"

    //drink block
    let drinkBlock = document.createElement("div")
    drinkBlock.classList.add("block")
    let drinkHead = document.createElement("h3")
    drinkHead.textContent = "Beverages"
    drinkBlock.appendChild(drinkHead)

    let drinks = document.createElement("ul")
    
    let drinkList = ['Honey Tea', 'Green Tea', 'John Tea']
    let drinkDescs = ['A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!',
        'Tea but its green',
        'Do not ask'
    ]
    let drinkPrices = ['$2', '$5', '$7']
    for (let i=0; i < drinkList.length; i++){
        let drinkItem = document.createElement("li")
        let drinkName = document.createElement("h4")
        drinkName.textContent = drinkList[i] + ` (${drinkPrices[i]})`
        let drinkDesc = document.createElement("p")
        drinkDesc.textContent = drinkDescs[i]
        drinkItem.appendChild(drinkName)
        drinkItem.appendChild(drinkDesc)

        drinks.appendChild(drinkItem)
    }

    drinkBlock.appendChild(drinks)


    //sides block
    let sideBlock = document.createElement("div")
    sideBlock.classList.add("block")
    let sideHeader = document.createElement("h3")
    sideHeader.classList.add("blockHead")
    sideHeader.textContent = "Sides"

    sideBlock.appendChild(sideHeader)
    let sides = document.createElement("ul")

    let sidesList = ['Toast and Jam',
        'Banh Mi',
        "'Donnie's Sides'"
    ]
    let sidesDescs = ['A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.',
        'In Vietnamese cuisine, bánh mì, bánh mỳ or banh mi, is a short baguette with thin, crisp crust and a soft, airy texture. Similar to a submarine sandwich, it is often split lengthwise and filled with meat and savory ingredients and served as a meal, called bánh mì thịt. Plain bánh mì is also eaten as a staple food.',
        '"What are these sides they cure cancer??"'
    ]
    let sidesPrices = ['$1', "$15", "$46,000"]

    for (let i=0; i < sidesList.length; i++){ 
        let sideItem = document.createElement("li")
        let sideName = document.createElement("h4")
        sideName.textContent = sidesList[i] + ` (${sidesPrices[i]})`
        let sideDesc = document.createElement("p")
        sideDesc.textContent = sidesDescs[i]
        sideItem.appendChild(sideName)
        sideItem.appendChild(sideDesc)

        sides.appendChild(sideItem)
    }
    sideBlock.appendChild(sides)

    //main dish block
    let mainBlock = document.createElement("div")
    mainBlock.classList.add("block")
    let mainHeader = document.createElement("h3")
    mainHeader.classList.add("blockHead")
    mainHeader.textContent = "Main Courses"

    mainBlock.appendChild(mainHeader)
    let mains = document.createElement("ul")

    let mainList = ['CQ Noodle',
        'Pho',
        'Shanghai Nodle'
    ]
    let mainDescs = ['A famous street-food of spicywheat noodles from southwest China. They feature a fiery, spicy, and numbing broth built from a complex mix of chili oil, Sichuan peppercorns, garlic, ginger, and soy sauce.',
        'It is a hot noodle soup. It has a clear, rich broth, flat rice noodles, and meat, usually beef or chicken. Cooks simmer bones and warm spices for many hours to make the tasty broth.',
        'thick, chewy wheat noodles stir-fried in a hot wok with savory soy sauce, meat (like pork or beef), and crisp vegetables such as bok choy or cabbage. The dish is savory, slightly smoky, and features dense, filling noodles.'
    ]
    let mainPrices = ['$15', "$12", "$10"]

    for (let i=0; i < sidesList.length; i++){ 
        let mainItem = document.createElement("li")
        let mainName = document.createElement("h4")
        mainName.textContent = mainList[i] + ` (${mainPrices[i]})`
        let mainDesc = document.createElement("p")
        mainDesc.textContent = mainDescs[i]
        mainItem.appendChild(mainName)
        mainItem.appendChild(mainDesc)

        mains.appendChild(mainItem)
    }
    mainBlock.appendChild(mains)

    


    //styles
    content.style.backgroundColor = "lightblue"
    content.style.display = "flex"
    content.style.flexDirection = "column"
    content.style.justifyContent = "center"
    content.style.alignItems = "center"

    content.appendChild(menuHeader)
    content.appendChild(drinkBlock)
    content.appendChild(sideBlock)
    content.appendChild(mainBlock)
    
    let blockItem = document.querySelectorAll(".block")
    blockItem.forEach(indBlock =>{
        indBlock.style.backgroundColor = "lightgrey"
        indBlock.style.margin = "30px"
    })
}