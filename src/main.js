import clearCart from "./clearCart";
import displayProducts from "./displayProducts";
import { clearBtn, displayProductsInCart } from "./displayProductsInCart";
import showCartCount from "./showCartCount";

// Sample product data
const products = [
  {
    id: 1,
    name: "Samurai King Resting",
    url: "/assets/images/hero-img.jpg",
    category: "Food",
    price: 10000.0,
    photoOfTheDay: true,
  },
  {
    id: 2,
    name: "Red Bench",
    url: "/assets/images/Red-Bench.png",
    category: "People",
    price: 3.89,
    bestSeller: true,
  },
  {
    id: 3,
    name: "Egg Balloon",
    url: "/assets/images/Egg-Balloon.jpg",
    category: "Food",
    price: 93.89,
  },
  {
    id: 4,
    name: "Egg Balloon",
    url: "/assets/images/Egg-Balloon.jpg",
    category: "Food",
    price: 93.89,
  },
  {
    id: 5,
    name: "Man",
    url: "/assets/images/pexels-photo.png",
    category: "People",
    price: 100.0,
  },
  {
    id: 6,
    name: "Architecture",
    url: "/images/Architecture.jpg",
    category: "Landmarks",
    price: 101.0,
  },
  {
    id: 7,
    name: "Architecture",
    url: "/assets/images/Architecture.jpg",
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

filterSaveBtn.addEventListener("click", filter);

const checkboxes = document.querySelectorAll(".filter-checkbox");

[...checkboxes].forEach((checkbox) => {
  checkbox.addEventListener("change", filter);
});

function filter() {
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

  if (dialog) dialog.close();
}

// Sort functionality for products
const productSort = document.querySelector(".products_sort");
productSort.addEventListener("change", sortProducts);

function sortProducts() {
  const sortBy = productSort.value;
  let sortedProducts = [...products];

  if (sortBy === "price-low-to-high") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high-to-low") {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === "best-selling") {
    sortedProducts.sort((a, b) => {
      if (a.bestSeller && !b.bestSeller) return -1;
      if (!a.bestSeller && b.bestSeller) return 1;
      return 0;
    });
  }

  displayProducts(sortedProducts);
}
