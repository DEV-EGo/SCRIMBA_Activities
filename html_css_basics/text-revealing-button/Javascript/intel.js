const btn = document.querySelector(".btn"); //choosing the button
const text = document.querySelector(".text"); // choosing the text
let shown = true; //will tell us wether the text is showing or not on the page

function toggleText() {
  //creating "if" statement that will use "shown" variable to make changes
  if (shown) {
    btn.innerText = "show text 👀";
    text.style.opacity = 0; //text will change to invisible
  }
}
