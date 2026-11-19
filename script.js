let currentImages = [];
let currentIndex = 0;

function openLightbox(image) {
    currentImages = Array.from(
        document.querySelectorAll(".gallery img")
    ).filter(img => img.style.display !== "none");

    currentIndex = currentImages.indexOf(image);

    document.getElementById("largeImage").src = image.src;

    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function changeImage(direction) {
    currentIndex += direction;

    if (currentIndex >= currentImages.length) {
        currentIndex = 0;
    }

    if (currentIndex < 0) {
        currentIndex = currentImages.length - 1;
    }

    document.getElementById("largeImage").src =
        currentImages[currentIndex].src;
}

function filterImages(category) {
    let images = document.querySelectorAll(".gallery img");

    images.forEach(image => {
        if (
            category === "all" ||
            image.classList.contains(category)
        ) {
            image.style.display = "block";
        } else {
            image.style.display = "none";
        }
    });
}