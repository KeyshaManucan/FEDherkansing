// JavaScript Document
let openButton = document.querySelector("header > button");
let sluitButton = document.querySelector("nav button");

openButton.onclick = openMenu;
sluitButton.onclick = sluitMenu;

function openMenu () {
    let deNav = document.querySelector("nav")
    deNav.classList.add("toonMenu");
}

function sluitMenu () {
    let deNav = document.querySelector("nav");
    deNav.classList.remove("toonMenu");
}