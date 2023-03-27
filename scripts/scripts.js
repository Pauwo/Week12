// const buttonRef = document.querySelector("button");

// function alertUser() {
//     alert("You clicked!!!");
//     // buttonRef.removeEventListener("click", alertUser);
// }
// buttonRef.addEventListener("click", alertUser, {once: true})

// function changeBGPink() {
//     // const bo = document.querySelector("body")
//     // bo.style.backgroundColor = "pink";
//     document.body.classList.add('pinkBG')
// }
// buttonRef.addEventListener("click", changeBGPink)

// function changeText() {
//     if (buttonRef.textContent === "Click Me!") {
//         buttonRef.textContent = "Clicked!";
//     } else {
//         buttonRef.textContent = "Click Me!"
//     }
// }
// buttonRef.addEventListener("click", changeText)


// function updateImage(event) {
//     const image = document.querySelector("#shoppingCart");
//     image.setAttribute("src", 'images/shoppingcart.png');
//     image.setAttribute("alt", 'shopping cart');
//     image.setAttribute("height", 50);
//     image.setAttribute("width", 50)
// }
// buttonRef.addEventListener("click", updateImage);


const buttonContainer = document.querySelector(".button-container")
// event parameter automatically receives event object
function bgchange(event) {
    console.log("button clicked ", event.target.tagName);
    if (event.target.tagName === "BUTTON"){
    event.target.classList.add("greenBG")
    }
}
buttonContainer.addEventListener("mouseover", bgchange)