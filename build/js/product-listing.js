import t from "./productData.js";
import o from "./productList.js";
import { loadHeaderFooter as r, getParam as e } from "./utils.js";
r();
const c = e("category"),
  s = new t(),
  a = document.querySelector(".product-list"),
  i = new o(c, s, a);
i.init();
