function hamburgerMainMenu() {
    var hamburgerMenu = document.querySelector('.main-menu');
    if (hamburgerMenu.style.display === "block") {
        hamburgerMenu.style.display = "none";
    } else {
        hamburgerMenu.style.display = "block";
    }
  }