const showCartCount = (carts) => {
  const countElement = document.querySelector(".count");
  if (carts.length == 0) {
    countElement.style.display = "none";
    countElement.textContent = "";
  } else {
    countElement.style.display = "";
    countElement.textContent = carts.length;
  }
};

export default showCartCount;
