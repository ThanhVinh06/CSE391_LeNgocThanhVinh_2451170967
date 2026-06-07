const images = [
"https://placehold.co/800x400?text=Image+1",
"https://placehold.co/800x400?text=Image+2",
"https://placehold.co/800x400?text=Image+3",
"https://placehold.co/800x400?text=Image+4",
"https://placehold.co/800x400?text=Image+5"
];

const commands = [
"Open Gallery",
"Next Image",
"Previous Image",
"Start Slideshow",
"Stop Slideshow"
];

let currentIndex = 0;
let slideshow = null;

const app = document.getElementById("app");

// Gallery
const gallery = document.createElement("div");
gallery.className = "gallery";

const title = document.createElement("h1");
title.textContent = "Keyboard Accessibility App";

const image = document.createElement("img");
image.src = images[0];
image.alt = "Gallery Image";
image.setAttribute("aria-label","Gallery Image");

gallery.append(title,image);

// Command Palette
const palette = document.createElement("div");
palette.className = "command-palette";
palette.id = "palette";

const box = document.createElement("div");
box.className = "command-box";

const search = document.createElement("input");
search.placeholder = "Type a command...";
search.setAttribute("aria-label","Command Search");

const list = document.createElement("div");
list.className = "command-list";

box.append(search,list);
palette.appendChild(box);

app.append(gallery,palette);

renderCommands(commands);

// Render command list
function renderCommands(data){

```
list.textContent = "";

data.forEach(command => {

    const item =
        document.createElement("div");

    item.textContent = command;
    item.tabIndex = 0;
    item.setAttribute(
        "aria-label",
        command
    );

    item.addEventListener("click",()=>{
        executeCommand(command);
    });

    list.appendChild(item);
});
```

}

// Execute command
function executeCommand(command){

```
if(command === "Next Image"){
    nextImage();
}

if(command === "Previous Image"){
    prevImage();
}

if(command === "Start Slideshow"){
    startSlide();
}

if(command === "Stop Slideshow"){
    stopSlide();
}

closePalette();
```

}

// Gallery controls
function nextImage(){

```
currentIndex++;

if(currentIndex >= images.length){
    currentIndex = 0;
}

image.src = images[currentIndex];
```

}

function prevImage(){

```
currentIndex--;

if(currentIndex < 0){
    currentIndex =
        images.length - 1;
}

image.src = images[currentIndex];
```

}

function startSlide(){

```
stopSlide();

slideshow = setInterval(()=>{
    nextImage();
},2000);
```

}

function stopSlide(){

```
clearInterval(slideshow);
```

}

// Command palette
function openPalette(){

```
palette.style.display = "flex";
search.focus();
```

}

function closePalette(){

```
palette.style.display = "none";
```

}

// Keyboard shortcuts
document.addEventListener("keydown",(e)=>{

```
// Ctrl + K
if(e.ctrlKey && e.key === "k"){

    e.preventDefault();

    openPalette();
}

// ESC
if(e.key === "Escape"){

    closePalette();

    const modal =
        document.querySelector(".modal");

    if(modal){
        modal.remove();
    }
}

// Arrow keys
if(e.key === "ArrowRight"){
    nextImage();
}

if(e.key === "ArrowLeft"){
    prevImage();
}

// Number 1-9
if(
    !isNaN(e.key) &&
    e.key !== "0"
){

    const number =
        Number(e.key) - 1;

    if(number < images.length){

        currentIndex = number;

        image.src =
            images[currentIndex];
    }
}

// Space
if(e.code === "Space"){

    e.preventDefault();

    if(slideshow){
        stopSlide();
        slideshow = null;
    }
    else{
        startSlide();
    }
}

// Enter chọn command
if(
    e.key === "Enter" &&
    palette.style.display === "flex"
){

    const first =
        list.firstElementChild;

    if(first){
        executeCommand(
            first.textContent
        );
    }
}
```

});

// Search command
search.addEventListener("input",()=>{

```
const keyword =
    search.value.toLowerCase();

const filtered =
    commands.filter(command =>
        command.toLowerCase()
        .includes(keyword)
    );

renderCommands(filtered);
```

});

// Demo modal
image.addEventListener("click",()=>{

```
const modal =
    document.createElement("div");

modal.className = "modal";

const content =
    document.createElement("div");

content.className =
    "modal-content";

content.textContent =
    "Press ESC to close";

modal.appendChild(content);

document.body.appendChild(modal);
```

});
