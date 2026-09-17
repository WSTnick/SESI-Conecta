const botaoMenu = document.querySelector(".botao-menu");
const links = document.querySelector(".links");

botaoMenu?.addEventListener("click", () => {
  const aberto = links.style.display === "flex";
  links.style.display = aberto ? "" : "flex";
  links.style.position = "absolute";
  links.style.top = "72px";
  links.style.left = "0";
  links.style.right = "0";
  links.style.padding = "20px 24px";
  links.style.background = "#071223";
  links.style.flexDirection = "column";
});

document.querySelectorAll(".links a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 800) links.style.display = "";
  });
});
