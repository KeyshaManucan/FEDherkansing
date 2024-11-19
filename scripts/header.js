// JavaScript Document

// Epic store menu links
let openButton = document.querySelector("header > button:first-of-type");
let sluitButtons = document.querySelectorAll("header nav:first-of-type button:first-of-type, header nav:first-of-type button:nth-of-type(2)");

openButton.onclick = openMenu; //.onclick werkt alleen voor 1 element en niet meerdere, waardoor ik het niet voor twee sluit buttons kan gebruiken

sluitButtons.forEach(button => {
  button.onclick = sluitMenu;
});

function openMenu () {
    let deNav = document.querySelector("header nav:first-of-type");
    deNav.classList.add("toonMenu");
    console.log(deNav.classList);
}

function sluitMenu () {
    let deNav = document.querySelector("header nav:first-of-type");
    deNav.classList.remove("toonMenu");
}


// Hamburger menu rechts
let hamburgermenuOpen = document.querySelector("header > button:last-of-type");
let hamburgermenuSluit = document.querySelector("header nav:nth-of-type(2) button:nth-of-type(2)");

hamburgermenuOpen.onclick = openHamburgermenu;
hamburgermenuSluit.onclick = sluitHamburgermenu;

function openHamburgermenu() {
    let deHamburger = document.querySelector("header nav:nth-of-type(2)");
    deHamburger.classList.add("toonHamburger");
    console.log(deHamburger.classList);
}

function sluitHamburgermenu() {
    let deHamburger = document.querySelector("header nav:nth-of-type(2)");
    deHamburger.classList.remove("toonHamburger");
}




// pagination dots voor carousel
// const dots = document.querySelectorAll('.pagination a');

// dots.forEach(dot => {
//   dot.addEventListener('click', function (event) {
//     event.preventDefault();
    
//     dots.forEach(d => d.style.backgroundColor = '#58585b');
    
//     this.style.backgroundColor = '#ffffff';
//   });
// });
