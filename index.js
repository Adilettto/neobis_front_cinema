const container = document.querySelector(".container");

window.addEventListener("load", () => {
  fetch("https://kinopoiskapiunofficial.tech/api/v2.2/films", {
    method: "GET",
    headers: {
      "X-API-KEY": `${API_KEY}`,
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((films) => {
        films.forEach((film) => {
        const card = document.createElement("div");
        card.classList.add("card");
        
        const cardImg = document.createElement("img");
        cardImg.classList.add("card-img");
        cardImg.src = film.posterUrl;

        const rating = document.createElement("div");
        rating.classList.add("rating");
        rating.textContent = film.ratingKinopoisk;

        const likeBtn = document.createElement("img");
        likeBtn.classList.add("like-btn");

        const filmName = document.createElement("p");
        filmName.classList.add("film-name");
        filmName.textContent = film.nameRu;

        const filmGenre = document.createElement("p");
        filmGenre.classList.add("film-genre");
        filmGenre.textContent = film.genres[0].genre;

        container.appendChild(card);
        card.appendChild(cardImg);
        card.appendChild(rating);
        card.appendChild(likeBtn);
        card.appendChild(filmName);
        card.appendChild(filmGenre);
      });
    });
});
