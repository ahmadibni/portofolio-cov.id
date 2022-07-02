const hamburger = document.querySelector(".hamburger");
const dropdown = document.querySelector(".dropdown");
const svg = document.querySelector("svg");
const header = document.querySelector("header");

let medQuery = window.matchMedia("(max-width: 700px)")

function closeDropdown(x) {
    if (x.matches) { // If media query matches
        dropdown.style.display = "flex";
        svg.style.boxShadow = "0 0 4px 0 rgba(255, 255, 255, 1)";
    } else {
        dropdown.style.display = "none";
        svg.style.border = "none";
    }
  }

let dropDownOpened = false;
hamburger.addEventListener('click', function (event) {
    
    if (dropDownOpened == false) {
        dropdown.style.display = "flex";
        svg.style.boxShadow = "0 0 4px 0 rgba(255, 255, 255, 1)";
        dropDownOpened = true;
    }
    else{
        closeDropdown(medQuery);
        dropdown.style.display = "none";
        svg.style.boxShadow = "none";
        dropDownOpened = false;
    }
});
medQuery.addListener(closeDropdown)
