var s = (e, n, t) =>
  new Promise((o, r) => {
    var c = (a) => {
        try {
          l(t.next(a));
        } catch (d) {
          r(d);
        }
      },
      i = (a) => {
        try {
          l(t.throw(a));
        } catch (d) {
          r(d);
        }
      },
      l = (a) => (a.done ? o(a.value) : Promise.resolve(a.value).then(c, i));
    l((t = t.apply(e, n)).next());
  });
function u(e) {
  if (e.ok) return e.text();
  throw new Error("Bad Response");
}
export function qs(e) {
  return document.querySelector(e);
}
export function getLocalStorage(e) {
  return JSON.parse(localStorage.getItem(e));
}
export function setLocalStorage(e, n) {
  localStorage.setItem(e, JSON.stringify(n));
}
export function setClick(e, n) {
  qs(e).addEventListener("touchend", (t) => {
    t.preventDefault(), n();
  }),
    qs(e).addEventListener("click", n);
}
export function getParam(e) {
  const n = window.location.search,
    t = new URLSearchParams(n);
  return t.get(e);
}
export function renderListWithTemplate(e, n, t, o) {
  t.forEach((r) => {
    const c = e.content.cloneNode(!0),
      i = o(c, r);
    n.appendChild(i);
  });
}
export function renderWithTemplate(e, n, t, o) {
  let r = e.content.cloneNode(!0);
  o && (r = o(r, t)), n.appendChild(r);
}
export function loadTemplate(e) {
  return s(this, null, function* () {
    const n = yield fetch(e).then(u),
      t = document.createElement("template");
    return (t.innerHTML = n), t;
  });
}
export function loadHeaderFooter() {
  return s(this, null, function* () {
    const e = yield loadTemplate("../partials/header.html"),
      n = yield loadTemplate("../partials/footer.html"),
      t = document.getElementById("main-header"),
      o = document.getElementById("main-footer");
    renderWithTemplate(e, t), renderWithTemplate(n, o);
  });
}
