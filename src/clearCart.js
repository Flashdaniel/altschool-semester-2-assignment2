export default function clearCart(carts) {
  carts = [];

  const list = document.querySelector(".cart-list");
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  const container = document.querySelector(".cart-container");
  const header = document.querySelector(".main-header");
  header.removeChild(container);
  const countElement = document.querySelector(".count");
  countElement.style.display = "none";
  countElement.textContent = "";
  return carts;
}
