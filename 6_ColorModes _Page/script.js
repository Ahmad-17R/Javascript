let greenbutton = document.querySelector("#green");
let bluebutton = document.querySelector("#blue");
let redbutton = document.querySelector("#red");
let yellowbutton = document.querySelector("#yellow");
let blackbutton = document.querySelector("#black");
let whitebutton = document.querySelector("#white");
let body = document.querySelector("body");


greenbutton.addEventListener("click", () => {
    body.setAttribute("class", "green");
})

blackbutton.addEventListener("click", () => {
    body.setAttribute("class", "black");
})

bluebutton.addEventListener("click", () => {
    body.setAttribute("class", "blue");
})

redbutton.addEventListener("click", () => {
    body.setAttribute("class", "red");
})

yellowbutton.addEventListener("click", () => {
    body.setAttribute("class", "yellow");
})

white.addEventListener("click", () => {
    body.setAttribute("class", "white");
})