<<<<<<< HEAD
import ProductData from "./productData.js";
=======
import ExternalServices from "./ExternalServices.js";
>>>>>>> main
import ProductList from "./productList.js";
import { loadHeaderFooter, getParam } from "./utils.js";

loadHeaderFooter();

const category = getParam("category");
<<<<<<< HEAD
// first create an instance of our ProductData class.
const dataSource = new ProductData();
=======
// first create an instance of our ExternalServices class.
const dataSource = new ExternalServices();
>>>>>>> main
// then get the element we want the product list to render in
const listElement = document.querySelector(".product-list");
// then create an instance of our ProductList class and send it the correct information.
const myList = new ProductList(category, dataSource, listElement);
// finally call the init method to show our products
myList.init();
