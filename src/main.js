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
    category: "food",
    price: 10000.0,
    photoOfTheDay: true,
  },
  {
    id: 2,
    name: "Red Bench",
    url: "./public/assets/images/Red-Bench.png",
    category: "people",
    price: 3.89,
    bestSeller: true,
  },
  {
    id: 3,
    name: "Egg Balloon",
    url: "./public/assets/images/Egg-Balloon.jpg",
    category: "food",
    price: 93.89,
  },
  {
    id: 4,
    name: "Egg Balloon",
    url: "./public/assets/images/Egg-Balloon.jpg",
    category: "food",
    price: 93.89,
  },
  {
    id: 5,
    name: "Man",
    url: "./public/assets/images/pexels-photo.png",
    category: "people",
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
      console.log(cart);
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
