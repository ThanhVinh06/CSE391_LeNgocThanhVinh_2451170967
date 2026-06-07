const products = [
{id:1,name:"iPhone 16",price:25990000,category:"phone",image:"https://placehold.co/200",rating:4.5,inStock:true},
{id:2,name:"Samsung S25",price:22990000,category:"phone",image:"https://placehold.co/200",rating:4.4,inStock:true},
{id:3,name:"Xiaomi 15",price:15990000,category:"phone",image:"https://placehold.co/200",rating:4.2,inStock:true},

```
{id:4,name:"MacBook Air M4",price:31990000,category:"laptop",image:"https://placehold.co/200",rating:4.8,inStock:true},
{id:5,name:"Dell XPS",price:28990000,category:"laptop",image:"https://placehold.co/200",rating:4.7,inStock:true},
{id:6,name:"Asus Vivobook",price:18990000,category:"laptop",image:"https://placehold.co/200",rating:4.1,inStock:true},

{id:7,name:"iPad Pro",price:24990000,category:"tablet",image:"https://placehold.co/200",rating:4.9,inStock:true},
{id:8,name:"Galaxy Tab",price:17990000,category:"tablet",image:"https://placehold.co/200",rating:4.4,inStock:true},
{id:9,name:"Xiaomi Pad",price:9990000,category:"tablet",image:"https://placehold.co/200",rating:4.0,inStock:true},

{id:10,name:"AirPods Pro",price:5990000,category:"accessory",image:"https://placehold.co/200",rating:4.6,inStock:true},
{id:11,name:"Galaxy Buds",price:3990000,category:"accessory",image:"https://placehold.co/200",rating:4.3,inStock:true},
{id:12,name:"Logitech MX Master",price:2490000,category:"accessory",image:"https://placehold.co/200",rating:4.8,inStock:true}
```

];

let currentProducts = [...products];
let cartCount = 0;

const app = document.getElementById("app");

createLayout();
renderProducts(currentProducts);

function createLayout(){

```
const header = document.createElement("div");
header.className = "header";

const title = document.createElement("h1");
title.textContent = "Product Catalog";

const cart = document.createElement("div");
cart.className = "cart";
cart.textContent = "🛒";

const badge = document.createElement("span");
badge.className = "badge";
badge.id = "badge";
badge.textContent = "0";

cart.appendChild(badge);

const darkBtn = document.createElement("button");
darkBtn.textContent = "Dark Mode";

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

header.append(title, darkBtn, cart);

const controls = document.createElement("div");
controls.className = "controls";

const searchInput = document.createElement("input");
searchInput.placeholder = "Search product...";
searchInput.addEventListener("input", searchProducts);

const sortSelect = document.createElement("select");

const sorts = [
    ["","Sort"],
    ["priceAsc","Price ↑"],
    ["priceDesc","Price ↓"],
    ["name","Name A-Z"],
    ["rating","Highest Rating"]
];

sorts.forEach(item => {
    const option = document.createElement("option");
    option.value = item[0];
    option.textContent = item[1];
    sortSelect.appendChild(option);
});

sortSelect.addEventListener("change", sortProducts);

controls.append(searchInput, sortSelect);

["all","phone","laptop","tablet","accessory"]
.forEach(category => {

    const btn = document.createElement("button");
    btn.textContent = category;

    btn.addEventListener("click", () => {
        filterByCategory(category);
    });

    controls.appendChild(btn);
});

const productContainer = document.createElement("div");
productContainer.className = "products";
productContainer.id = "products";

app.append(header, controls, productContainer);
```

}

function renderProducts(data){

```
const container = document.getElementById("products");

container.textContent = "";

data.forEach(product => {

    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = product.image;

    const name = document.createElement("h3");
    name.textContent = product.name;

    const price = document.createElement("p");
    price.textContent =
        product.price.toLocaleString("vi-VN") + " đ";

    const rating = document.createElement("p");
    rating.textContent = "⭐ " + product.rating;

    const button = document.createElement("button");
    button.textContent = "Thêm giỏ";

    button.addEventListener("click", function(e){

        e.stopPropagation();

        cartCount++;

        document.getElementById("badge").textContent =
            cartCount;
    });

    card.addEventListener("click", function(){
        openModal(product);
    });

    card.append(
        img,
        name,
        price,
        rating,
        button
    );

    container.appendChild(card);
});
```

}

function searchProducts(event){

```
const keyword =
    event.target.value.toLowerCase();

currentProducts =
    products.filter(product =>
        product.name.toLowerCase()
        .includes(keyword)
    );

renderProducts(currentProducts);
```

}

function filterByCategory(category){

```
if(category === "all"){
    currentProducts = [...products];
}
else{
    currentProducts =
        products.filter(product =>
            product.category === category
        );
}

renderProducts(currentProducts);
```

}

function sortProducts(event){

```
const value = event.target.value;

const arr = [...currentProducts];

if(value === "priceAsc"){
    arr.sort((a,b) => a.price - b.price);
}

if(value === "priceDesc"){
    arr.sort((a,b) => b.price - a.price);
}

if(value === "name"){
    arr.sort((a,b) =>
        a.name.localeCompare(b.name)
    );
}

if(value === "rating"){
    arr.sort((a,b) =>
        b.rating - a.rating
    );
}

renderProducts(arr);
```

}

function openModal(product){

```
const modal = document.createElement("div");
modal.className = "modal";

const box = document.createElement("div");
box.className = "modal-content";

const title = document.createElement("h2");
title.textContent = product.name;

const price = document.createElement("p");
price.textContent =
    "Price: " +
    product.price.toLocaleString("vi-VN") +
    " đ";

const category = document.createElement("p");
category.textContent =
    "Category: " +
    product.category;

const rating = document.createElement("p");
rating.textContent =
    "Rating: " +
    product.rating;

const stock = document.createElement("p");
stock.textContent =
    product.inStock ?
    "In Stock" :
    "Out Of Stock";

box.append(
    title,
    price,
    category,
    rating,
    stock
);

modal.appendChild(box);

modal.addEventListener("click", function(){
    modal.remove();
});

document.body.appendChild(modal);
```

}
