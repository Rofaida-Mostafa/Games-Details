import { getting } from "./ui.module.js";
// import { getDetails} from"./detail.module.js";

const home = new getting();

let navbar = document.querySelector("nav").querySelectorAll("a");

for (let i = 0; i < navbar.length; i++) {
  navbar[i].addEventListener("click", () => {
    document.querySelector(".active")?.classList.remove("active");

    navbar[i].classList.add("active");
    console.log(navbar[i].innerHTML);
  });
}

// console.log(getDetails())



let button = document.querySelector(".nav-bars");
let list = document.querySelector(".uls");
let firstSEC = document.querySelector("#home")
button.addEventListener("click", () => {
  list.classList.toggle("d-flex");
firstSEC.style.cssText=" margin-bottom: 22px !impotant"
  
})
