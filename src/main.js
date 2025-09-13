import clearCart from "./clearCart";
import displayProducts from "./displayProducts";
import { clearBtn, displayProductsInCart } from "./displayProductsInCart";
import showCartCount from "./showCartCount";

// Sample product data
const products = [
  {
    id: 1,
    name: "Samurai King Resting",
    url: "./public/assets/images/hero-img.jpg",
    category: "Food",
    price: 10000.0,
    photoOfTheDay: true,
  },
  {
    id: 2,
    name: "Red Bench",
    url: "./public/assets/images/Red-Bench.png",
    category: "People",
    price: 3.89,
    bestSeller: true,
  },
  {
    id: 3,
    name: "Egg Balloon",
    url: "./public/assets/images/Egg-Balloon.jpg",
    category: "Food",
    price: 93.89,
  },
  {
    id: 4,
    name: "Egg Balloon",
    url: "./public/assets/images/Egg-Balloon.jpg",
    category: "Food",
    price: 93.89,
  },
  {
    id: 5,
    name: "Man",
    url: "./public/assets/images/pexels-photo.png",
    category: "People",
    price: 100.0,
  },
  {
    id: 6,
    name: "Architecture",
    url: "./public/assets/images/Architecture.jpg",
    category: "Landmarks",
    price: 101.0,
  },
  {
    id: 7,
    name: "Architecture",
    url: "./public/assets/images/Architecture.jpg",
    category: "Landmarks",
    price: 101.0,
  },
];

displayProducts(products);

let cart = [];

const shoppingbtn = document.querySelector(".shopping-cart");

// Toggle cart count visibility on click
showCartCount(cart);

// Add items to cart and update count
document.querySelectorAll(".card_btn").forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.id;

    const product = products.find((item) => item.id === parseInt(id));
    if (product) {
      if (cart.length > 0) {
        cart.find((item) => {
          if (item.id === product.id) {
            return true;
          } else {
            cart.push(product);
            showCartCount(cart);
            displayProductsInCart(cart);
            return false;
          }
        });
      } else {
        cart.push(product);
        showCartCount(cart);
        displayProductsInCart(cart);
      }
    }
  });
});

// Show cart on shopping button click
shoppingbtn.addEventListener("click", () => {
  const container = document.querySelector(".cart-container");
  if (container) container.style.display = "block";
});

// Clear cart functionality
clearBtn.addEventListener("click", () => {
  cart = clearCart(cart);
});

// Filter dialog functionality
const filterBtn = document.querySelector(".product_filter-btn");
const dialog = document.querySelector(".product_dialog-filter");

filterBtn.addEventListener("click", () => {
  if (dialog) dialog.showModal();
});

const closeBtn = document.querySelector(".filter-close-btn");

closeBtn.addEventListener("click", () => {
  if (dialog) dialog.close();
});

const filterClearBtn = document.querySelector(".filter-btn-clear");
const filterSaveBtn = document.querySelector(".filter-btn-save");

filterClearBtn.addEventListener("click", () => {
  const checkboxes = document.querySelectorAll(".filter-checkbox");
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
});

filterSaveBtn.addEventListener("click", function filter() {
  const checkboxes = document.querySelectorAll(".filter-checkbox");
  const selected = [];
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      selected.push(checkbox.value);
    }
  });

  if (selected.length > 0) {
    const filteredProductsPrice = products.filter((product) => {
      if (product.price < 20 && selected.includes("Lower then $20")) {
        return true;
      } else if (
        product.price >= 20 &&
        product.price <= 100 &&
        selected.includes("$20 - $100")
      ) {
        return true;
      } else if (
        product.price > 100 &&
        product.price <= 200 &&
        selected.includes("$100 - $200")
      ) {
        return true;
      } else if (product.price > 200 && selected.includes("More than $200")) {
        return true;
      }
      return false;
    });

    const filteredProductsCategory = products.filter((product) => {
      if (selected.includes(product.category)) {
        return true;
      }
      return false;
    });

    const finalFilteredProducts = [
      ...new Set([...filteredProductsPrice, ...filteredProductsCategory]),
    ];

    displayProducts(finalFilteredProducts);
  } else {
    displayProducts(products);
  }
  dialog.close();
});
