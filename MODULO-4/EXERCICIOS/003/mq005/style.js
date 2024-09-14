const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector(".nav");
const  menu = document.querySelector (".menu");
hamburguer.addEventListener("click", () => nav.classList.toggle("active"));
