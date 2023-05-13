const show = document.querySelector(".show-more");
let card = document.querySelectorAll(".hidden");
const hamburger = document.querySelector(".hidden-bars");
const links = document.querySelector(".links");

show.addEventListener("click", function () {
  card.forEach((card) => {
    card.classList.toggle("hidden");
    textSwap();
  });
});
function textSwap() {
  if (show.innerHTML === "View More") {
    show.innerHTML = "Show Less";
  } else {
    show.innerHTML = "View More";
  }
}

hamburger.addEventListener("click", function () {
  links.classList.toggle("hidden-links");
});
