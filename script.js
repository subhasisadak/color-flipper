let background = document.querySelector(".background");
let button = document.querySelector(".button");
let codeArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

let changeColor = () => {
    let number1 = codeArr[Math.floor(Math.random() * 16)];
    let number2 = codeArr[Math.floor(Math.random() * 16)];
    let number3 = codeArr[Math.floor(Math.random() * 16)];
    let number4 = codeArr[Math.floor(Math.random() * 16)];
    let number5 = codeArr[Math.floor(Math.random() * 16)];
    let number6 = codeArr[Math.floor(Math.random() * 16)];
    let newColor = '#' + number1 + number2 + number3 + number4 + number5 + number6;
    background.style.backgroundColor = newColor;
    // let color = background.style.backgroundColor;
    console.log('#' + number1 + number2 + number3 + number4 + number5 + number6);
}

button.addEventListener("click", changeColor);
