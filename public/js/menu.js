const MenuMobile = document.querySelector("#MenuMobile");
const MenuLinks = document.querySelector("#MenuLinks");

MenuMobile.addEventListener("click", () => {
  MenuMobile.classList.toggle("menuOnAnimation");
  if (MenuLinks.classList.contains("active")) {
    MenuLinks.classList.remove("active");

    setTimeout(() => {
      MenuLinks.style.display = "none";
    }, 800); // 300ms é o tempo da transição no CSS
  } else {
    MenuLinks.style.display = "flex"; // Mostra o menu imediatamente

    setTimeout(() => {
      MenuLinks.classList.add("active");
    }, 10); // Delay mínimo para garantir a ativação da transição
  }
});
