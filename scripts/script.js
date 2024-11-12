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

// discover menu
let discoverMenu = document.querySelector("main nav button:nth-of-type(2)")
let discoverList = document.querySelector("main nav ul")

discoverMenu.addEventListener('click', menuToggle)

function menuToggle () {
    discoverList.classList.toggle('discoverMenu') 
}

// arrow rotatie discover menu
let arrowRotatie = document.querySelector("button[aria-label='arrow']");
arrowRotatie.onclick = startRotate;
function startRotate() {
  arrowRotatie.classList.toggle("rotate");
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
