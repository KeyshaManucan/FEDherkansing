//Bij deze code maakte ik gebruik van bronnen om het te maken en zelf aangepast als nodig.
//Bronnen:
// - https://codepen.io/zepzia/pen/VPrXJJ
// - ChatGPT.com


function toggleVisibility(items, button, visibleCount) {
  if (!button) return; 

  items.forEach((item, index) => {
    item.style.display = index < visibleCount ? "block" : "none";
  });

  button.onclick = function () {
    const expanded = button.classList.contains("expanded");
    
    if (expanded) {
      items.forEach((item, index) => {
        item.style.display = index < visibleCount ? "block" : "none";
      });
      button.querySelector("p").textContent = "Show more"; 
    } else {
      items.forEach((item) => {
        item.style.display = "block"; 
      });
      button.querySelector("p").textContent = "Show less"; 
    }

    button.classList.toggle("expanded", !expanded);
  };
}

// Genre
const genreList = document.querySelector("main section:nth-of-type(3) ul");
const listButton = genreList?.closest("section")?.querySelector("button");
const listItems = genreList?.querySelectorAll("li");
if (listItems && listButton) {
  toggleVisibility(listItems, listButton, 3);
}

// Tutorials
const tutorialList = document.querySelector("main section:nth-of-type(4) section:first-of-type > section");
const tutorialButton = tutorialList?.querySelector("button");
const articleItems = tutorialList?.querySelectorAll("article");
if (articleItems && tutorialButton) {
  toggleVisibility(articleItems, tutorialButton, 2);
}

// Sample projects
const sampleList = document.querySelector("main section:nth-of-type(4) > section:last-of-type");
const sampleButton = sampleList?.querySelector("button");
const sampleItems = sampleList?.querySelectorAll("article");
if (sampleItems && sampleButton) {
  toggleVisibility(sampleItems, sampleButton, 3);
}

// Scherm resolutie
function updateVisibility() {
  const isLargeScreen = window.matchMedia("(min-width: 50em)").matches;

  const allItems = [
    { items: listItems, button: listButton, visibleCount: 3 },
    { items: articleItems, button: tutorialButton, visibleCount: 2 },
    { items: sampleItems, button: sampleButton, visibleCount: 3 }
  ];

  allItems.forEach(({ items, button, visibleCount }) => {
    if (items) {
      items.forEach(item => {
        item.style.display = isLargeScreen ? "block" : item.style.display;
      });
    }
    if (button) {
      button.style.visibility = isLargeScreen ? "hidden" : "visible"; 
    }
  });
}

updateVisibility();
window.addEventListener("resize", updateVisibility);

// Code zodat de 'show more' button werkt voor elke sectie die met de radio button wordt aangeroepen
document.addEventListener("DOMContentLoaded", () => {
  function toggleVisibility(items, button, visibleCount) {
    if (!button) return;

    items.forEach((item, index) => {
      item.style.display = index < visibleCount ? "block" : "none";
    });

    button.onclick = function () {
      const expanded = button.classList.contains("expanded");

      if (expanded) {
        items.forEach((item, index) => {
          item.style.display = index < visibleCount ? "block" : "none";
        });
        button.querySelector("p").textContent = "Show more";
      } else {
        items.forEach(item => {
          item.style.display = "block";
        });
        button.querySelector("p").textContent = "Show less";
      }

      button.classList.toggle("expanded", !expanded);
    };
  }

  function setupRadioControls(section) {
    const form = section.querySelector("form");
    const radioButtons = form.querySelectorAll('input[type="radio"]');
    const childSections = section.querySelectorAll(":scope > section");

    function updateVisibility() {
      const isLargeScreen = window.matchMedia("(min-width: 50em)").matches;
      const selectedValue = form.querySelector('input[type="radio"]:checked')?.value;

      childSections.forEach(childSection => {
        if (childSection.classList.contains(selectedValue)) {
          childSection.style.display = "block";

          const button = childSection.querySelector("button");
          const items = childSection.querySelectorAll("article");
          if (items && button) {
            if (isLargeScreen) {
              items.forEach(item => (item.style.display = "block"));
              button.style.visibility = "hidden";
            } else {
              button.style.visibility = "visible";
              toggleVisibility(items, button, 2);
            }
          }
        } else {
          childSection.style.display = "none";
        }
      });
    }

    radioButtons.forEach(radio => {
      radio.addEventListener("change", updateVisibility);
    });

    window.addEventListener("resize", updateVisibility);

    updateVisibility();
  }

  const parentSection = document.querySelector("main section:nth-of-type(4) section:first-of-type");
  if (parentSection) {
    setupRadioControls(parentSection);
  }
});

