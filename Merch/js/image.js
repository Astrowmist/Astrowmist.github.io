document.addEventListener("DOMContentLoaded", function () {
    // Select the image element
    var imageElement = document.querySelector(".ecwid-SingleProduct-picture img");

    // Check if the image element is found
    while (!imageElement) {
        // New image URL
        var imageElement = document.querySelector(".ecwid-SingleProduct-picture img");

    }
    var newImageUrl = "https://example.com/new-image.png";
    // Change the image URL
    imageElement.src = newImageUrl;
    imageElement.srcset = newImageUrl + " 1x, " + newImageUrl + " 2x";
});
