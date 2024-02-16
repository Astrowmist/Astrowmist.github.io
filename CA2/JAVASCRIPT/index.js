'use strict'

//Fuction to keep the NavBar active to let the user know which page they are currently on
function activeNavBar() {
  document.addEventListener('DOMContentLoaded', function () {
    var links = document.getElementsByTagName('a');
    var currentUrl = window.location.href;

    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      if (link.href === currentUrl) {
        link.classList.add('active');
        var parentLi = link.parentElement;
        if (parentLi && parentLi.tagName === 'LI') {
          parentLi.classList.add('active');
        }
      }
    }
  })
}
activeNavBar();

// Function to add fade-in effect when scrolling
function fadeInOnScroll() {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    const isVisible = elementTop < window.innerHeight && elementBottom >= 0;

    if (isVisible) {
      element.classList.add('fade-in-visible');
    }
  }
  )
}

// Event listener to trigger fade-in effect on scroll
document.addEventListener('scroll', fadeInOnScroll);



// JavaScript code for the typing animation
const titleElement = document.getElementById('deathearth');
const titleText = "The Looming Crisis: Our Dying Earth";
let index = 0;

function typeTitle() {
  titleElement.textContent = titleText.slice(0, index);
  if (index < titleText.length) {
    index++;
    setTimeout(typeTitle, 120); // Adjust the typing speed here (in milliseconds)
  }
}

typeTitle();


