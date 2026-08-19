import { initPage } from "./loadPage.js"
import { initHomeTab } from "./home.js"
import { initContactTab } from "./contact.js"
import { initMenuTab } from "./menu.js"

//initialize
console.log("starting")
// initPage()
// initHomeTab()

const homeTab = document.querySelector(".homeTab")
const menuTab = document.querySelector(".menuTab")
const contactTab = document.querySelector(".contactTab")
let content = document.querySelector("#content")
const body = document.querySelector("body")

homeTab.addEventListener('click', ()=>{
    let oldContent = document.querySelector("#content")
    body.removeChild(oldContent)
    let newContent = document.createElement("div")
    newContent.setAttribute('id', 'content')
    newContent.style.backgroundColor = "lightblue"
    newContent.style.display = "flex"
    newContent.style.flexDirection = "column"
    newContent.style.justifyContent = "center"
    newContent.style.alignItems = "center"
    body.appendChild(newContent)

    initHomeTab()
})

menuTab.addEventListener('click', ()=>{
    let oldContent = document.querySelector("#content")
    body.removeChild(oldContent)
    let newContent = document.createElement("div")
    newContent.setAttribute('id', 'content')

    newContent.style.backgroundColor = "lightblue"
    newContent.style.display = "flex"
    newContent.style.flexDirection = "column"
    newContent.style.justifyContent = "center"
    newContent.style.alignItems = "center"
    body.appendChild(newContent)

    initMenuTab()
})

contactTab.addEventListener('click', ()=>{
    let oldContent = document.querySelector("#content")
    body.removeChild(oldContent)
    let newContent = document.createElement("div")
    newContent.setAttribute('id', 'content')

    newContent.style.backgroundColor = "lightblue"
    newContent.style.display = "flex"
    newContent.style.flexDirection = "column"
    newContent.style.justifyContent = "center"
    newContent.style.alignItems = "center"
    body.appendChild(newContent)

    initContactTab()

})