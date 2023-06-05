const userInput = document.querySelector(".user-input");
const btn = document.querySelector(".btn");
let insertDiv = document.querySelector(".insert-div");

let movieArray = JSON.parse(localStorage.getItem("movieArray")) || [];

function renderSearch() {
  insertDiv.innerHTML = "";
  movieArray.forEach((movie) => {
    insertDiv.innerHTML += `
      <div class="movie-div">
        <img src="${movie.Poster}">
        <div class="movie-text">
          <p>${movie.Title}</p>
          <p>Type: ${movie.Type}</p>
          <p>Year: ${movie.Year}</p>
          <p>IMDb ID: ${movie.imdbID}</p>
          <span class="material-symbols-outlined click" id="add-circle"> add_circle</span>
        </div>
      </div>
    `;
  });

  const addBtns = document.querySelectorAll(".click");
  addBtns.forEach((addBtn) => {
    if (addBtn) {
      addBtn.addEventListener("click", addToWatchlist);
    }
  });
}

btn.addEventListener("click", function () {
  fetch(`http://www.omdbapi.com/?apikey=bdf87af0&s=${userInput.value}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.Response === "True") {
        movieArray = data.Search;
        console.log(movieArray);
        renderSearch();
      } else {
        insertDiv.innerHTML = `
          <h3 class="error-text">${data.Error}</h3>
        `;
      }
    });
});

function addToWatchlist(event) {
  const movieDiv = event.target.closest(".movie-div");
  const movie = {
    Title: movieDiv.querySelector("p").textContent,
    Type: movieDiv.querySelector("p:nth-child(2)").textContent,
    Year: movieDiv.querySelector("p:nth-child(3)").textContent,
    imdbID: movieDiv.querySelector("p:nth-child(4)").textContent,
    Poster: movieDiv.querySelector("img").getAttribute("src"),
  };

  let watchlist = JSON.parse(localStorage.getItem("movieArray")) || [];
  const existingMovie = watchlist.find((m) => m.imdbID === movie.imdbID);
  if (!existingMovie) {
    watchlist.push(movie);
    localStorage.setItem("movieArray", JSON.stringify(watchlist));
  }
  insertDiv.innerHTML = "";
  insertDiv.innerHTML += `
  <h2>Movie Has Been Added</h2>
  <a href="/watchlist.html" class="header-nav" style="color: #ec0505">To Watchlist</a>
  `;
}
