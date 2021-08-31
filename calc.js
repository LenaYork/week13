//Закоменченное - более длинное решение, но без циклов, свитча и массива
// let plusButton = document.querySelector(".plusButton");
// let minusButton = document.querySelector(".minusButton");
// let divideButton = document.querySelector(".divideButton");
// let multiplyButton = document.querySelector(".multiplyButton");

let userNum1;
let userNum2;

function getNumbers() {
    userNum1 = +prompt("Введите первое число");
    userNum2 = +prompt("Введите второе число");
}

// plusButton.addEventListener("click", countPlus);

function countPlus() {
    getNumbers();
    alert(userNum1 + userNum2);
}

// minusButton.addEventListener("click", countMinus);

function countMinus() {
    getNumbers();
    alert(userNum1 - userNum2);
}

// divideButton.addEventListener("click", countDivide);

function countDivide() {
    getNumbers();
    alert(userNum1 / userNum2);
}

// multiplyButton.addEventListener("click", countMultiply);

function countMultiply() {
    getNumbers();
    alert(userNum1 * userNum2);
}

const buttons = [
    "plusButton",
    "minusButton",
    "divideButton",
    "multiplyButton"
];

function count(operator) {
    switch (operator) {
        case "plusButton":
            countPlus();
            break;

        case "minusButton":
            countMinus();
            break;

        case "divideButton":
            countDivide();
            break;

        case "multiplyButton":
            countMultiply();
            break;

        default:
            break;
    }
}

for (let i = 0; i < 4; i++) {
    document.querySelector(`.${buttons[i]}`).addEventListener("click", () => { count(buttons[i]) });
}



