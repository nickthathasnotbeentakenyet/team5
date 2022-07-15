var s=(e,t,n)=>new Promise((o,r)=>{var c=a=>{try{l(n.next(a))}catch(d){r(d)}},i=a=>{try{l(n.throw(a))}catch(d){r(d)}},l=a=>a.done?o(a.value):Promise.resolve(a.value).then(c,i);l((n=n.apply(e,t)).next())});function u(e){if(e.ok)return e.text();throw new Error("Bad Response")}export function qs(e){return document.querySelector(e)}export function getLocalStorage(e){return JSON.parse(localStorage.getItem(e))}export function setLocalStorage(e,t){localStorage.setItem(e,JSON.stringify(t))}export function setClick(e,t){qs(e).addEventListener("touchend",n=>{n.preventDefault(),t()}),qs(e).addEventListener("click",t)}export function getParam(e){const t=window.location.search,n=new URLSearchParams(t);return n.get(e)}export function renderListWithTemplate(e,t,n,o){n.forEach(r=>{const c=e.content.cloneNode(!0),i=o(c,r);t.appendChild(i)})}export function renderWithTemplate(e,t,n,o){let r=e.content.cloneNode(!0);o&&(r=o(r,n)),t.appendChild(r)}export function loadTemplate(e){return s(this,null,function*(){const t=yield fetch(e).then(u),n=document.createElement("template");return n.innerHTML=t,n})}export function loadHeaderFooter(){return s(this,null,function*(){const e=yield loadTemplate("../partials/header.html"),t=yield loadTemplate("../partials/footer.html"),n=document.getElementById("main-header"),o=document.getElementById("main-footer");renderWithTemplate(e,n),renderWithTemplate(t,o)})}export function alertMessage(e,t=!0,n=3e3){const o=document.createElement("div");o.classList.add("alert"),o.innerHTML=`<p>${e}</p><span>X</span>`,o.addEventListener("click",function(c){c.target.tagName=="SPAN"&&r.removeChild(this)});const r=document.querySelector("main");r.prepend(o),t&&window.scrollTo(0,0)}export function removeAllAlerts(){const e=document.querySelectorAll(".alert");e.forEach(t=>document.querySelector("main").removeChild(t))}