export function qs(t) {
  return document.querySelector(t);
}
export function getLocalStorage(t) {
  return JSON.parse(localStorage.getItem(t));
}
export function setLocalStorage(t, e) {
  localStorage.setItem(t, JSON.stringify(e));
}
export function setClick(t, e) {
  qs(t).addEventListener("touchend", (n) => {
    n.preventDefault(), e();
  }),
    qs(t).addEventListener("click", e);
}
export function getParam(t) {
  const e = window.location.search,
    n = new URLSearchParams(e);
  return n.get(t);
}
export function renderListWithTemplate(t, e, n, o) {
  n.forEach((r) => {
    const a = t.content.cloneNode(!0),
      c = o(a, r);
    e.appendChild(c);
  });
}
