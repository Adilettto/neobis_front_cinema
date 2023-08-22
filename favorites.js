document.addEventListener("DOMContentLoaded", () => {
  const favoritesContainer = document.getElementById("favoritesContainer");
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  console.log("Favorites:", favorites);

  favorites.forEach((film) => {
    const filmEl = document.createElement("div");
    filmEl.classList.add("card");
    filmEl.innerHTML = `
        <img class="card-img" src="${film.posterUrlPreview}" alt="${
      film.nameEn
    }">
        <div class="rating">${film.rating}</div>
        <img class="like-btn" src="assets/red-heart.png" alt="heart-icon" onclick="toggleHeart(this)">
        <p class="film-name">${
          film.nameEn !== null ? film.nameEn : film.nameRu
        }</p>
        <p class="film-genre">${film.genres.map(
          (genre) => ` ${genre.genre}`
        )}</p> 
        `;
        favoritesContainer.appendChild(filmEl);
  });
});
