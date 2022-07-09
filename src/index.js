import makeHome from "./home";
import makeMenu from "./menu";
import makeContact from "./contact";

const content = document.getElementById("content");

function component(arg) {
    content.innerHTML = "";
    content.appendChild(arg);
}

document.addEventListener('click', (e) => {
    const target1 = e.target.innerText;
    if (target1 === "HOME"){
        let page = makeHome();
        component(page);
    } 
    if (target1 === "MENU"){
        let page = makeMenu();
        component(page);
        

    } 
    if (target1 === "CONTACT"){
        let page = makeContact();
        component(page);
    } 
});