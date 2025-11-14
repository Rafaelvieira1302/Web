function bla() {
    console.log("Hello, World!");
}
b=document.querySelector("button:nth-child(4)"); // Selects the fourth child element of its parent
b.innerHTML="Clique aqui"; // Sets the inner HTML of the selected element to "Clique aqui"
b.addEventListener("click", bla); // Adds a click event listener to the selected element that triggers the bla function
