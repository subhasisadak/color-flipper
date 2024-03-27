let background = document.querySelector(".background");
let button = document.querySelector(".button");
let codeArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
function getNewColorCode() {
    let newColor = '#';
    for(let i = 0; i < 6; i++){
        newColor += codeArr[Math.floor(Math.random() * 16)];
    }
    return newColor;
}
let changeColor = () => {
    newColor = getNewColorCode();
    background.style.backgroundColor = newColor;
    button.style.color = newColor;
    console.log(newColor);
    newColor = getNewColorCode();
    button.style.backgroundColor = newColor;
    // let color = background.style.backgroundColor;
    console.log(newColor);
}

button.addEventListener("click", changeColor);
