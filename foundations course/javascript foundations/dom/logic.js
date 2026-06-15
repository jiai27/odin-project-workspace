// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const n1 = document.createElement("p")
n1.classList.add("n1")
n1.textContent = "Hey I'm Red!"
n1.style.color = "red"

const n2 = document.createElement("h3")
n2.classList.add("n2")
n2.textContent = "I'm a blue h3!"
n2.style.color = "blue"

const n3 = document.createElement("div")

const n31 = document.createElement("h1")
n3.classList.add("n31")
n31.textContent = "I'm in a div"
n3.appendChild(n31)

const n32 = document.createElement("p")
n3.classList.add("n32")
n32.textContent = "ME TOO!"
n3.appendChild(n32)

container.appendChild(content);
container.appendChild(n1)
container.appendChild(n2)
container.appendChild(n3)


// method 2
// the JavaScript file
/*
const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

// method 3
// the JavaScript file
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  alert("Hello World");
});
*/

// can also make them into functions

/*
btn.addEventListener("click", function (e) {
    e.target.style.background = "blue"
});
*/

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});


