// Author: Cristian Camilo Cortes Ortiz

const button = document.getElementById("changeColorBtn");
const message = document.getElementById("message");

button.addEventListener("click", function () {
    document.body.style.backgroundColor = "blue";

    message.textContent = "Background color changed!"
})