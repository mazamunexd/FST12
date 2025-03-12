// Document Object Model (DOM)

// .querySelector()
// Pass: #id, classname, tagname
const elementWithId = document.querySelector("#first-div");
console.log(elementWithId);

elementWithId.textContent = "Div 1";
elementWithId.style.backgroundColor = "Green";
elementWithId.style.color = "Gold";

// It can only select the first element
const elementWithClass = document.querySelector(".sample-div");
console.log(elementWithClass);

// .querySelectorAll()
// Pass: #id, .classname, tagname
const divElementWithClass = document.querySelectorAll(".sample-div");
console.log(divElementWithClass);
divElementWithClass[1].style.textAlign = "center";
divElementWithClass[1].style.textDecoration = "underline";

const headings = document.querySelectorAll("h3");
console.log(headings);

headings.forEach(function(heading){
    heading.style.backgroundColor = "OrangeRed";
    heading.style.color = "Red";
    heading.style.border = "2px solid black";
})

// Appending New Elements
const parentElement = document.querySelector("#parent-element");
const createdElement = document.createElement("div");
createdElement.textContent = "Child Element";
console.log(createdElement);
parentElement.appendChild(createdElement);

// Remove an element
const elementToBeRemoved = document.querySelector("#element-to-be-removed");
elementToBeRemoved.remove();

const darkModeBtn = document.querySelector("#dark-mode-btn");
darkModeBtn.addEventListener("click", function (){
    const pageContainer = document.querySelector("#page-container");
    pageContainer.style.backgroundColor = "Black";
    pageContainer.style.color = "White";
    const pageModeText = document.querySelector("#page-mode-text");
    pageModeText.textContent = "Dark Mode";
})