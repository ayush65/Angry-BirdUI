function hamburgerMainMenu() {
    var hamburgerMenu = document.querySelector('.main-menu');
    if (hamburgerMenu.style.display === "block") {
        hamburgerMenu.style.display = "none";
    } else {
        hamburgerMenu.style.display = "block";
    }
  }

  function hamburgerComponent() {
    var hamburgerComp = document.querySelector('.hamburger-link');
    if (hamburgerComp.style.display === "block") {
        hamburgerComp.style.display = "none";
    } else {
        hamburgerComp.style.display = "block";
    }
  } 
