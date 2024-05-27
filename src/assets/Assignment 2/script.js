const album = document.querySelector(".album_wrap .album");
const zoom_pics = document.getElementById("zoom");
const zoompic = document.getElementById("zoompic");
const favoritesArea = document.getElementById("favoritesArea");
const zoomCaption = document.getElementById("zoomCaption");

async function fetchImages() {
  const apiKey = "fXQmWn4qCJTSB4gKjxBAZy55yUY39DcKgkMjAZQIGk6lz9Oz5BKIISSN";
  const apiUrl = `https://api.pexels.com/v1/curated?per_page=10`;

  try {
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: apiKey,
      },
    });
    const data = await response.json();
    displayImages(data.photos);
  } catch (error) {
    console.error("Error fetching images:", error);
  }
}

function displayImages(photos) {
  photos.forEach((photo) => {
    const img = document.createElement("img");
    img.src = photo.src.large;
    img.alt = photo.photographer;
    img.dataset.caption = photo.photographer;
    img.onclick = () => openZoomPic(photo.src.large, photo.photographer);
    album.appendChild(img);
  });
}

function openZoomPic(img, caption) {
  zoompic.src = img;
  zoomCaption.textContent = caption;
  zoom_pics.style.display = "flex";
}

function closeZoomPic() {
  zoom_pics.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  closeZoomPic();
  fetchImages();
});

let scrollContainer = document.querySelector(".album_wrap .album");
let leftButton = document.getElementById("left_btn");
let rightButton = document.getElementById("right_btn");

rightButton.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 900;
});

leftButton.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 900;
});

function addToFavorites() {
  var currentFavoritesCount = favoritesArea.childElementCount;
  var currentFavorites = favoritesArea.querySelectorAll(
    ".favorite-container img"
  );

  var isAlreadyAdded = Array.from(currentFavorites).some(
    (img) => img.src === zoompic.src
  );

  if (isAlreadyAdded) {
    alert("This image is already added to favorites.");
    return;
  }

  if (currentFavoritesCount < 5) {
    var favoriteContainer = document.createElement("div");
    favoriteContainer.classList.add("favorite-container");

    var favoriteImage = document.createElement("img");
    favoriteImage.src = zoompic.src;
    favoriteImage.alt = "Favorite";
    favoriteImage.classList.add("favorite-img");

    var removeLink = document.createElement("a");
    removeLink.href = "#";
    removeLink.textContent = "Remove";
    removeLink.classList.add("remove-link");
    removeLink.onclick = function () {
      removeFromFavorites(favoriteContainer);
    };

    favoriteContainer.appendChild(favoriteImage);
    favoriteContainer.appendChild(removeLink);
    favoritesArea.appendChild(favoriteContainer);
    openZoomPic(zoompic.src, zoomCaption.textContent);
  } else {
    alert(
      "You can only add a maximum of 5 favorites. Remove at least one favorite first."
    );
  }
}

function removeFromFavorites(container) {
  favoritesArea.removeChild(container);
}
