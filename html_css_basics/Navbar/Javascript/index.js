// const will not change at all
const linkName = document.querySelector(".link-name");
const nameInput = document.querySelector(".name-input");

function setName(name) {
  linkName.innerText = "Welcome, ";

  let nameInner = document.createElement("span");

  nameInnner.innerText = name;

  nameInner.setAttribute("class", "name");

  linkName.appendChild(nameInner); ///targeting the navbar class "linkname"

  return nameInner;
}

nameInput.addEventListener("change", () => {
  setName(nameInput.value);
});
