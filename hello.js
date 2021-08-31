let userName = "";
let userNameButton = document.querySelector("#getUserNameButton");

function getUserName() {
    userName = prompt("Как вас зовут?", "Алина");
}

function sayHello() {
    getUserName();
    alert(`Привет, ${userName}`);
}

userNameButton.addEventListener("click", sayHello);

