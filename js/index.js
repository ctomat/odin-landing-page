const buttonAnimationTrigger = () => {
  const hamburgerButton = document.getElementById("button-animation");
  const hamburgerMenu = document.getElementById("hamburger");
  hamburgerButton.classList.toggle("menu-button-animation");
  if (!hamburgerMenu.classList.contains("display-element")) {
    hamburgerMenu.classList.add("display-element");
    hamburgerMenu.classList.remove("hide-element");
  } else {
    hamburgerMenu.classList.add("hide-element");
    hamburgerMenu.classList.remove("display-element");
  }
};
