var n=(c,t,e)=>new Promise((a,i)=>{var o=r=>{try{l(e.next(r))}catch(s){i(s)}},m=r=>{try{l(e.throw(r))}catch(s){i(s)}},l=r=>r.done?a(r.value):Promise.resolve(r.value).then(o,m);l((e=e.apply(c,t)).next())});import{renderListWithTemplate as u,getLocalStorage as h}from"./utils.js";export default class d{constructor(t,e){this.key=t,this.listElement=e,this.total=0}init(){return n(this,null,function*(){const t=h(this.key);t&&(this.calculateListTotal(t),this.renderList(t))})}prepareTemplate(t,e){return t.querySelector(".cart-card__image img").src=e.Images.PrimaryMedium,t.querySelector(".cart-card__image img").alt+=e.Name,t.querySelector(".card__name").textContent=e.Name,t.querySelector(".cart-card__color").textContent=e.Colors[0].ColorName,t.querySelector(".cart-card__price").textContent+=e.FinalPrice,t}calculateListTotal(t){const e=t.map(a=>a.FinalPrice);this.total=e.reduce((a,i)=>a+i,0)}renderList(t){this.listElement.innerHTML="";const e=document.getElementById("cart-card-template");u(e,this.listElement,t,this.prepareTemplate),document.querySelector(".list-total").innerText+=` $${this.total}`}}
