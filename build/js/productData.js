var a = (n, r, t) =>
  new Promise((d, s) => {
    var f = (e) => {
        try {
          o(t.next(e));
        } catch (c) {
          s(c);
        }
      },
      l = (e) => {
        try {
          o(t.throw(e));
        } catch (c) {
          s(c);
        }
      },
      o = (e) => (e.done ? d(e.value) : Promise.resolve(e.value).then(f, l));
    o((t = t.apply(n, r)).next());
  });
const u = "http://157.201.228.93:2992/";
function h(n) {
  if (n.ok) return n.json();
  throw new Error("Bad Response");
}
export default class p {
  constructor() {}
  getData(r) {
    return fetch(u + `products/search/${r}`)
      .then(h)
      .then((t) => t.Result);
  }
  findProductById(r) {
    return a(this, null, function* () {
      return yield fetch(u + `product/${r}`)
        .then(h)
        .then((t) => t.Result);
    });
  }
}
