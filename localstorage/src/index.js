const forms = document.querySelectorAll("form");

forms.forEach((form) =>
    form.addEventListener("submit", (e) => e.preventDefault())
);

// Here are all DOM elements you need

const resultsDiv = document.querySelector(".results");
const keyInput = document.querySelector(".key");
const valueInput = document.querySelector(".value");
const removeInput = document.querySelector(".remove");
const storeBtn = document.querySelector(".store");
const showBtn = document.querySelector(".show");
const clearOneBtn = document.querySelector(".clearOne");
const clearAllBtn = document.querySelector(".clearAll");

// Add your code below
// const showArea = document.querySelector(".showArea");
//add items with store me button
function submitHandler() {
    localStorage.setItem(keyInput.value, valueInput.value);
}
storeBtn.addEventListener("click", submitHandler);

//clear one item with clear one button
function clearOneHandler() {
    localStorage.removeItem(removeInput.value);
}
clearOneBtn.addEventListener("click", clearOneHandler);

//show all items in localStorage with show storage button
function showHandler() {
    const resultsP = document.createElement("p");
    const destroyP = document.querySelector("p");
    if (destroyP) {
        resultsDiv.removeChild(destroyP);
    }
    if (localStorage.length === 0) {
        resultsP.innerText = `Local storage is empty.`;
    }
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        resultsP.innerHTML += `${key}: ${localStorage.getItem(key)} <br />`;
        // showArea.innerHTML += `${key}: ${localStorage.getItem(key)} <br />`;
        // console.log(`${key}: ${localStorage.getItem(key)}`);
    }
    resultsDiv.appendChild(resultsP);
}
showBtn.addEventListener("click", showHandler);

//clear localStorage with clear all button
function clearAllHandler() {
    const destroyP = document.querySelector("p");
    localStorage.clear();
    resultsDiv.removeChild(destroyP);
}
clearAllBtn.addEventListener("click", clearAllHandler);
