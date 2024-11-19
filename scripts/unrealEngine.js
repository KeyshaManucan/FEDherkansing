//Bij deze maakte ik gebruik van bronnen om het te maken.
//Bronnen:
// - https://codepen.io/zepzia/pen/VPrXJJ
// - ChatGPT.com


let genreList = document.querySelector("main section:nth-of-type(3) ul"); 
let listButton = document.querySelector("main section:nth-of-type(3) button"); 

let listItems = genreList.querySelectorAll("li");
const initialVisibleCount = 3; 

listItems.forEach((li, index) => {
  if (index >= initialVisibleCount) {
    li.style.display = "none";
  }
});


listButton.onclick = function () {
  if (listButton.classList.contains("expanded")) {

    listItems.forEach((li, index) => {
      if (index >= initialVisibleCount) {
        li.style.display = "none"; 
      }
    });
    listButton.classList.remove("expanded");
    listButton.querySelector("p").textContent = "Show more";
  } else {

    listItems.forEach((li) => {
      li.style.display = "block"; 
    });
    listButton.classList.add("expanded");
    listButton.querySelector("p").textContent = "Show less";
  }
};

