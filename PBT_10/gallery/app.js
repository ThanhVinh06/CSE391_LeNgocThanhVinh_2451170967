const gallery =
    document.getElementById("gallery");

const loading =
    document.getElementById("loading");

const trigger =
    document.getElementById("load-trigger");

const lightbox =
    document.getElementById("lightbox");

const lightboxImg =
    document.getElementById("lightboxImg");

const closeBtn =
    document.getElementById("closeBtn");

let page = 1;
let isLoading = false;

/* Load ảnh */

async function loadMorePhotos(){

    if(isLoading) return;

    isLoading = true;

    loading.style.display = "block";

    try{

        const response =
            await fetch(
                `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=20`
            );

        const photos =
            await response.json();

        renderPhotos(photos);

        page++;

    }
    catch(error){

        console.error(error);

    }
    finally{

        loading.style.display = "none";

        isLoading = false;

    }
}

/* Render ảnh */

function renderPhotos(photos){

    photos.forEach(photo => {

        const img =
            document.createElement("img");

        img.className = "photo";

        /* Lazy Loading */

        img.dataset.src =
            photo.download_url;

        img.alt = photo.author;

        gallery.appendChild(img);

        imageObserver.observe(img);

        /* Lightbox */

        img.addEventListener("click", () => {

            lightbox.style.display = "flex";

            lightboxImg.src =
                photo.download_url;

        });

    });

}