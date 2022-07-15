var c=(i,t,r)=>new Promise((e,s)=>{var u=d=>{try{o(r.next(d))}catch(a){s(a)}},p=d=>{try{o(r.throw(d))}catch(a){s(a)}},o=d=>d.done?e(d.value):Promise.resolve(d.value).then(u,p);o((r=r.apply(i,t)).next())});import{setLocalStorage as l,getLocalStorage as n,loadHeaderFooter as h,alertMessage as m}from"./utils.js";h();export default class ${constructor(t,r){this.productId=t,this.product={},this.dataSource=r}init(){return c(this,null,function*(){this.product=yield this.dataSource.findProductById(this.productId),document.querySelector("main").innerHTML=this.renderProductDetails(),document.getElementById("addToCart").addEventListener("click",this.addToCart.bind(this))})}addToCart(){let t=n("so-cart");t||(t=[]),t.push(this.product),l("so-cart",t),m(`${this.product.NameWithoutBrand} added to cart!`)}renderProductDetails(){return`<section class="product-detail"> <h3>${this.product.Brand.Name}</h3>
    <h2 class="divider">${this.product.NameWithoutBrand}</h2>
    <img
      class="divider"
      src="${this.product.Images.PrimaryLarge}"
      alt="${this.product.NameWithoutBrand}"
    />
    <p class="product-card__price">$${this.product.FinalPrice}</p>
    <p class="product__color">${this.product.Colors[0].ColorName}</p>
    <p class="product__description">
    ${this.product.DescriptionHtmlSimple}
    </p>
    <div class="product-detail__add">
      <button id="addToCart" data-id="${this.product.Id}">Add to Cart</button>
    </div></section>`}}
