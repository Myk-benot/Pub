let insertDivTwo = document.querySelector(".insert-div-two");

function renderWatchlist() {
  insertDivTwo.innerHTML = "";
  let watchlist = JSON.parse(localStorage.getItem("movieArray")) || [];

  if (watchlist && watchlist.length > 0) {
    watchlist.forEach((movie) => {
      insertDivTwo.innerHTML += `
        <div class="movie-div">
          <img src="${movie.Poster}">
          <div class="movie-text">
            <p>${movie.Title}</p>
            <p>Type: ${movie.Type}</p>
            <p>Year: ${movie.Year}</p>
            <p>IMDb ID: ${movie.imdbID}</p>
            <span id="remove-circle" class="material-symbols-outlined click" data-imdbid="${movie.imdbID}">remove_circle</span>
          </div>
        </div>
      `;
    });
  }

  const removeBtns = document.querySelectorAll(".click");
  removeBtns.forEach((removeBtn) => {
    removeBtn.addEventListener("click", removeFromWatchlist);
  });
}

function removeFromWatchlist(event) {
  const removeBtn = event.target;
  const imdbID = removeBtn.getAttribute("data-imdbid");
  let watchlist = JSON.parse(localStorage.getItem("movieArray")) || [];
  const updatedWatchlist = watchlist.filter((movie) => movie.imdbID !== imdbID);
  localStorage.setItem("movieArray", JSON.stringify(updatedWatchlist));

  renderWatchlist();
}

renderWatchlist();
