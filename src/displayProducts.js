export default function displayProducts(products) {
  const productList = document.querySelector(".products_list");
  products.forEach((product) => {
    if (product.id === 1) return;
    const productItem = document.createElement("li");
    productItem.className = "products_item";
    const card = document.createElement("figure");
    card.className = "card";

    const imgContainer = document.createElement("div");
    imgContainer.className = "card_img-container gridbox";

    const img = document.createElement("img");
    img.className = "card_img";
    img.src = product.url;
    img.alt = product.name;
    img.width = 382;
    img.height = 502;
    img.loading = "lazy";

    imgContainer.appendChild(img);

    if (product.bestSeller) {
      const badge = document.createElement("span");
      badge.className = "card_img-caption align-start";
      badge.textContent = "Best Seller";
      imgContainer.appendChild(badge);
    }

    const button = document.createElement("button");
    button.className = "btn card_btn";
    button.id = product.id;
    button.textContent = "ADD TO CART";

    const figCaption = document.createElement("figcaption");
    figCaption.className = "card_content";

    const article = document.createElement("article");

    const category = document.createElement("h3");
    category.className = "card_title font-size-22";
    category.textContent = product.category;
    const name = document.createElement("h4");
    name.className = "card_title font-size-34";
    name.textContent = product.name;
    const price = document.createElement("p");
    price.className = "card_text font-size-29";
    price.textContent = `$${product.price}`;

    const hgroup = document.createElement("hgroup");
    hgroup.append(category, name);

    article.append(hgroup, price);
    figCaption.append(article);

    card.append(imgContainer, button, figCaption);
    productItem.appendChild(card);
    productList.appendChild(productItem);
  });
}
