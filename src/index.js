import makeHome from "./home";
import makeMenu from "./menu";
import makeContact from "./contact";
import { gsap } from "gsap";

let vary = "";

const content = document.getElementById("content");

function component(arg, vary) {
    content.innerHTML = "";
    content.appendChild(arg);
    gsap.from(vary, {duration: 1.5, y: 1000, opacity: 0, ease: "elastic"});
}

document.addEventListener('click', (e) => {
    const target1 = e.target.innerText;
    if (target1 === "HOME"){
        let page = makeHome();
        let vars = ".homebox";
        component(page, vars);
    } 
    if (target1 === "MENU"){
        let page = makeMenu();
        let vars = ".food";
        component(page, vars);
        

    } 
    if (target1 === "CONTACT"){
        let page = makeContact();
        let vars = ".card";
        component(page, vars);
    } 
});

let vars  = ".homebox"
let page = makeHome();
component(page, vars);