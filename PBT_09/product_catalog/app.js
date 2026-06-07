const products = [
{ id: 1, name: "iPhone 16", price: 25990000, category: "phone", image: "https://placehold.co/200", rating: 4.5, inStock: true },
{ id: 2, name: "Samsung S25", price: 22990000, category: "phone", image: "https://placehold.co/200", rating: 4.4, inStock: true },
{ id: 3, name: "MacBook Air M4", price: 31990000, category: "laptop", image: "https://placehold.co/200", rating: 4.8, inStock: true },
{ id: 4, name: "Dell XPS", price: 28990000, category: "laptop", image: "https://placehold.co/200", rating: 4.7, inStock: true },
{ id: 5, name: "iPad Pro", price: 24990000, category: "tablet", image: "https://placehold.co/200", rating: 4.9, inStock: true },
{ id: 6, name: "Galaxy Tab", price: 17990000, category: "tablet", image: "https://placehold.co/200", rating: 4.4, inStock: true },
{ id: 7, name: "AirPods Pro", price: 5990000, category: "accessory", image: "https://placehold.co/200", rating: 4.6, inStock: true },
{ id: 8, name: "Galaxy Buds", price: 3990000, category: "accessory", image: "https://placehold.co/200", rating: 4.3, inStock: true },
{ id: 9, name: "Xiaomi 15", price: 15990000, category: "phone", image: "https://placehold.co/200", rating: 4.2, inStock: true },
{ id: 10, name: "Asus Vivobook", price: 18990000, category: "laptop", image: "https://placehold.co/200", rating: 4.1, inStock: true },
{ id: 11, name: "Xiaomi Pad", price: 9990000, category: "tablet", image: "https://placehold.co/200", rating: 4.0, inStock: true },
{ id: 12, name: "Logitech MX", price: 2490000, category: "accessory", image: "https://placehold.co/200", rating: 4.8, inStock: true }
];

let filteredProducts = [...products];
let cartCount = 0;

const app = document.getElementById("app");

const title = document.createElement("h1");
title.textContent = "Product Catalog";

const searchInput = document.createElement("input");
searchInput.placeholder = "Search...";

const sortSelect = document.createElement("select");

const option1 = document.createElement("option");
option1.value = "";
option1.textContent = "Sort";

const option2 = document.createElement("option");
option2.value = "priceAsc";
option2.textContent = "Price ↑";

const option3 = document.createElement("option");
option3.value = "priceDesc";
option3.textContent = "Price ↓";

const option4 = document.createElement("option");
option4.value = "name";
option4.textContent = "Name A-Z";

const option5 = document.createElement("option");
option5.value = "rating";
option5.textContent = "Highest Rating";

sortSelect.append(
option1,
option2,
option3,
option4,
option5
);

const darkBtn = document.createElement("button");
darkBtn.textContent = "Dark Mode";

const cart = document.createElement("div");
cart.textContent = "🛒";

const badge = document.createElement("span");
badge.textContent = "0";

cart.appendChild(badge);

const controls = document.createElement("div");

const categories = [
"all",
"phone",
"laptop",
"tablet",
"accessory"
];

categories.forEach(category => {
const btn = document.createElement("button");
btn.textContent = category;

```
btn.addEventListener("click", () => {
    filterByCategory(category);
});

controls.appendChild(btn);
```

});

const productContainer = document.createElement("div");

app.append(
title,
searchInput,
sortSelect,
darkBtn,
cart,
controls,
productContainer
);

function renderProducts(data) {

```
productContainer.textContent = "";

data.forEach(product => {

    const card = document.createElement("div");

    const image = document.createElement("img");
    image.src = product.image;

    const name = document.createElement("h3");
    name.textContent = product.name;

    const price = document.createElement("p");
    price.textContent =
        product.price.toLocaleString() + " đ";

    const rating = document.createElement("p");
    rating.textContent =
        "⭐ " + product.rating;

    const button =
        document.createElement("button");

    button.textContent = "Add To Cart";

    button.addEventListener("click", (e) => {
        e.stopPropagation();

        cartCount++;
        badge.textContent = cartCount;
    });

    card.addEventListener("click", () => {
        openModal(product);
    });

    card.append(
        image,
        name,
        price,
        rating,
        button
    );

    productContainer.appendChild(card);
});
```

}

function filterByCategory(category) {

```
if (category === "all") {
    filteredProducts = [...products];
} else {
    filteredProducts =
        products.filter(
            product =>
                product.category === category
        );
}

renderProducts(filteredProducts);
```

}

function searchProducts() {

```
const keyword =
    searchInput.value.toLowerCase();

filteredProducts =
    products.filter(product =>
        product.name
            .toLowerCase()
            .includes(keyword)
    );

renderProducts(filteredProducts);
```

}

function sortProducts() {

```
const value = sortSelect.value;

const arr = [...filteredProducts];

if (value === "priceAsc") {
    arr.sort((a, b) => a.price - b.price);
}

if (value === "priceDesc") {
    arr.sort((a, b) => b.price - a.price);
}

if (value === "name") {
    arr.sort((a, b) =>
        a.name.localeCompare(b.name)
    );
}

if (value === "rating") {
    arr.sort((a, b) =>
        b.rating - a.rating
    );
}

renderProducts(arr);
```

}

function openModal(product) {

```
const modal = document.createElement("div");

modal.style.position = "fixed";
modal.style.inset = "0";
modal.style.background =
    "rgba(0,0,0,0.5)";

const box =
    document.createElement("div");

box.style.background = "white";
box.style.padding = "20px";
box.style.margin = "100px auto";
box.style.width = "300px";

const name = document.createElement("h2");
name.textContent = product.name;

const price = document.createElement("p");
price.textContent =
    product.price.toLocaleString() + " đ";

const rating = document.createElement("p");
rating.textContent =
    "Rating: " + product.rating;

box.append(
    name,
    price,
    rating
);

modal.appendChild(box);

modal.addEventListener("click", () => {
    modal.remove();
});

document.body.appendChild(modal);
```

}

searchInput.addEventListener(
"input",
searchProducts
);

sortSelect.addEventListener(
"change",
sortProducts
);

darkBtn.addEventListener("click", () => {
document.body.classList.toggle("dark-mode");
});

renderProducts(products);
