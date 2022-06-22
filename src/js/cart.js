import { loadHeaderFooter } from "./utils.js";
import CartList from "./cartList";

loadHeaderFooter();

const cart = new CartList("so-cart", document.querySelector(".product-list"));
cart.init();
