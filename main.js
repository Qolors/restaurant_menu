(()=>{"use strict";const t=document.getElementById("content");function n(n){t.innerHTML="",t.appendChild(n)}document.addEventListener("click",(t=>{const e=t.target.innerText;"HOME"===e&&n(function(){const t=document.createElement("div");return t.textContent="Home!",t}()),"MENU"===e&&n(function(){const t=document.createElement("div");return t.textContent="Menu!",t}()),"CONTACT"===e&&n(function(){const t=document.createElement("div");return t.textContent="Contact!",t}())}))})();