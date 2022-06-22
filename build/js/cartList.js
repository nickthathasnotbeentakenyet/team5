var n = (s, e, t) =>
  new Promise((l, c) => {
    var o = (r) => {
        try {
          a(t.next(r));
        } catch (i) {
          c(i);
        }
      },
      m = (r) => {
        try {
          a(t.throw(r));
        } catch (i) {
          c(i);
        }
      },
      a = (r) => (r.done ? l(r.value) : Promise.resolve(r.value).then(o, m));
    a((t = t.apply(s, e)).next());
  });
import { renderListWithTemplate as _, getLocalStorage as y } from "./utils.js";
export default class d {
  constructor(e, t) {
    (this.key = e), (this.listElement = t);
  }
  init() {
    return n(this, null, function* () {
      const e = y(this.key);
      this.renderList(e);
    });
  }
  prepareTemplate(e, t) {
    return (
      (e.querySelector(".cart-card__image img").src = t.Image),
      (e.querySelector(".cart-card__image img").alt += t.Name),
      (e.querySelector(".card__name").textContent = t.Name),
      (e.querySelector(".cart-card__color").textContent =
        t.Colors[0].ColorName),
      (e.querySelector(".cart-card__price").textContent += t.FinalPrice),
      e
    );
  }
  renderList(e) {
    this.listElement.innerHTML = "";
    const t = document.getElementById("cart-card-template");
    _(t, this.listElement, e, this.prepareTemplate);
  }
}
