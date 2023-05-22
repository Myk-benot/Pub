import dogs from "./data.js";
import Dog from "./Dog.js";
let currentDogIndex = 0;
let currentDog = new Dog(dogs[currentDogIndex]);

function render() {
  document.getElementById("container").innerHTML = currentDog.dogHtml();
}
render();

function getNewDog() {
  currentDogIndex += 1;
  if (currentDogIndex >= dogs.length) {
    currentDogIndex = 0;
  }
  currentDog = new Dog(dogs[currentDogIndex]);
  render();
}

function yes() {
  currentDog.matchStatus(true);
  setTimeout(getNewDog, 3000);
}

document.querySelector(".cross").addEventListener("click", function () {
  const nopeImage = document.querySelector(".hiddennope");
  nopeImage.style.display = "block";
  nopeImage.style.position = "absolute";
  nopeImage.style.zIndex = "1";
  console.log("click");
  setTimeout(() => {
    document.querySelector(".hiddennope").style.display = "none";
    yes();
  }, 5000);
});

document.querySelector(".heart").addEventListener("click", function () {
  const likeImage = document.querySelector(".hiddenlike");
  likeImage.style.display = "block";
  likeImage.style.position = "absolute";
  likeImage.style.zIndex = "1";
  console.log("click");
  setTimeout(() => {
    document.querySelector(".hiddenlike").style.display = "none";
    yes();
  }, 5000);
});
