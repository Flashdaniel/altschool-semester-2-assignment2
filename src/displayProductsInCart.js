// Module to display products in the cart
const container = document.createElement("div");
container.className = "cart-container";

// Create list to hold cart items
const list = document.createElement("ul");
list.className = "cart-list";
list.role = "list";

// Create clear and cancel buttons
const clearBtn = document.createElement("button");
clearBtn.className = "btn card-btn clear-btn font-size-23";
clearBtn.textContent = "CLEAR";

const cancelBtn = document.createElement("button");
cancelBtn.className = "btn icon-btn cancel-btn font-size-18";
cancelBtn.textContent = "X";

cancelBtn.addEventListener("click", () => {
  const container = document.querySelector(".cart-container");
  container.style.display = "none";
});

container.append(cancelBtn, list, clearBtn);

function displayProductsInCart(carts) {
  // loop through carts and display each item
  carts.forEach((cart) => {
    const item = document.createElement("li");
    item.className = "cart-item cart-item flexbox";

    const name = document.createElement("p");
    name.className = "cart-item_name";
    name.textContent = cart.name;

    const price = document.createElement("p");
    price.className = "cart-item_price";
    price.textContent = `$${cart.price}`;

    const img = document.createElement("img");
    img.className = "cart-item_img";
    img.src = cart.url;
    img.alt = cart.name;

    const firstContainer = document.createElement("div");
    const secondContainer = document.createElement("div");

    firstContainer.append(name, price);
    secondContainer.append(img);

    item.append(firstContainer, secondContainer);

    list.append(item);
  });

  const header = document.querySelector(".main-header");
  header.append(container);
}

export { displayProductsInCart, clearBtn };
