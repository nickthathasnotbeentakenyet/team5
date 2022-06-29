var n = (s, e, t) =>
  new Promise((l, c) => {
    var o = (r) => {
        try {
          i(t.next(r));
        } catch (a) {
          c(a);
        }
      },
      m = (r) => {
        try {
          i(t.throw(r));
        } catch (a) {
          c(a);
        }
      },
      i = (r) => (r.done ? l(r.value) : Promise.resolve(r.value).then(o, m));
    i((t = t.apply(s, e)).next());
  });
import { renderListWithTemplate as y, getLocalStorage as _ } from "./utils.js";
export default class d {
  constructor(e, t) {
    (this.key = e), (this.listElement = t);
  }
  init() {
    return n(this, null, function* () {
      const e = _(this.key);
      this.renderList(e);
    });
  }
  prepareTemplate(e, t) {
    return (
      (e.querySelector(".cart-card__image img").src = t.Images.PrimaryMedium),
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
    y(t, this.listElement, e, this.prepareTemplate);
  }
}
