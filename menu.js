const nav = document.querySelector("nav");
const menu = document.querySelector(".menu-items");
const some = document.querySelector(".some");
const burger = document.querySelector("#burger");
// variabler der vælger elementer ud fra id, class eller tag

burger.addEventListener("click", mobilMenu);
// er der klikket på burger-ikonet, kaldes funktionen mobilMenu

function mobilMenu() {
  if (menu.style.display !== "flex") {
    // hvis display ikke er flex på ul med class menu
    menu.style.display = "flex";
    // display sættes til flex på ul med class .menu
    some.style.display = "flex";
    // display sættes til flex på ul med class .some
    nav.classList.add("active");
    // nav får tilføjet class .active
    burger.classList.add("active");
    // #burger får tilføjet class .active
    burger.firstChild.classList.remove("fa-bars");
    // burger får fjernet class med bars-ikonet
    burger.firstChild.classList.add("fa-circle-xmark");
    // burger får tilføjet class med circle-xmark-ikonet
  } else {
    // hvis ul med class menu allerede har display:flex
    menu.style.display = "none";
    // display sættes til none på ul med class .menu
    nav.classList.remove("active");
    // nav får fjernet class .active
    burger.classList.remove("active");
    // #burger får fjernet class .active
    burger.firstChild.classList.remove("fa-circle-xmark");
    // burger får fjernet class med circle-xmark-ikonet
    burger.firstChild.classList.add("fa-bars");
    // burger får tilføjet class med bars-ikonet
  }
}
