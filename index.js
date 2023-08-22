const API_KEY_POPULAR =
  "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1";

const API_KEY_AWAIT =
  "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=1";

const API_KEY_PREMIERES = "https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2022&month=AUGUST";


async function getFilms(url, containerId) {
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": API_KEY,
    },
  });
  const resData = await res.json();
  displayMovies(resData, containerId);
}

function displayMovies(data, containerId) {
  const filmsEl = document.getElementById(containerId);

  data.films.forEach((film) => {
    const filmEl = document.createElement("div");
    filmEl.classList.add("card");
    filmEl.innerHTML = `
                <img class="card-img"  src="${film.posterUrlPreview}" alt="${
      film.nameEn
    }">
                <div class="rating">${film.rating}</div>
                <img class="like-btn" src="assets/white-heart.png" alt="heart-icon" onclick="toggleHeart(this)">
                <p class="film-name">${
                  film.nameEn !== null ? film.nameEn : film.nameRu
                }</p>
                <p class="film-genre">${film.genres.map(
                  (genre) => ` ${genre.genre}`
                )}</p>   
                `;
    filmsEl.appendChild(filmEl);
  });
}

function toggleHeart(heartIcon, filmInfo) {
  if (heartIcon.getAttribute("src") === "assets/white-heart.png") {
    heartIcon.setAttribute("src", "assets/red-heart.png");
    addToFavorites(filmInfo);
  } else {
    heartIcon.setAttribute("src", "assets/white-heart.png");
    removeFromFavorites(filmInfo);
  }
}

function addToFavorites(filmInfo) {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        favorites.push(filmInfo);
        localStorage.setItem("favorites", JSON.stringify(favorites));
}

function removeFromFavorites(filmInfo) {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        const updatedFavorites = favorites.filter(favorite => favorite.id !== filmInfo.id);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
}

// Search Functionality


getFilms(API_KEY_POPULAR, "popularFilms");
getFilms(API_KEY_AWAIT, "awaitFilms");
getFilms(API_KEY_PREMIERES, "premieres");





