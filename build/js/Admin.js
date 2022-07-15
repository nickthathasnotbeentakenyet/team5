var i=(l,e,t)=>new Promise((r,a)=>{var d=s=>{try{o(t.next(s))}catch(n){a(n)}},c=s=>{try{o(t.throw(s))}catch(n){a(n)}},o=s=>s.done?r(s.value):Promise.resolve(s.value).then(d,c);o((t=t.apply(l,e)).next())});import m from"./ExternalServices.js";import{alertMessage as h}from"./utils.js";export default class g{constructor(e){this.mainElement=document.querySelector(e),this.token=null,this.services=new m}login(e,t){return i(this,null,function*(){try{this.token=yield this.services.loginRequest(e),t()}catch(r){h(r.message.message)}})}showLogin(){this.mainElement.innerHTML=u(),document.querySelector("#loginButton").addEventListener("click",e=>{const t=document.querySelector("#email").value,r=document.querySelector("#password").value;this.login({email:t,password:r},this.showOrders.bind(this))})}showOrders(){return i(this,null,function*(){try{const e=yield this.services.getOrders(this.token);this.mainElement.innerHTML=p();const t=document.querySelector("#orders tbody");t.innerHTML=e.map(r=>`<tr><td>${r.id}</td><td>${new Date(r.orderDate).toLocaleDateString("en-US")}</td><td>${r.items.length}</td><td>${r.orderTotal}</td></tr>`).join("")}catch(e){console.log(e)}})}}function u(){return`<fieldset class="login-form">
  <legend>Login</legend>
  <p>
    <label for="email">Email</label>
    <input type="text" placeholder="email" id="email" value="user1@email.com"/>
  </p>
  <p>
    <label for="password">Password</label>
    <input type="password" placeholder="password" id="password" />
  </p>
  <button type="submit" id="loginButton">Login</button>
</fieldset>`}function p(){return`<h2>Current Orders</h2>
  <table id="orders">
  <thead>
  <tr><th>Id</th><th>Date</th><th>#Items</th><th>Total</th>
  </thead>
  <tbody class="order-body"></tbody>
  </table>
  `}
