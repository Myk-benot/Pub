const form = document.querySelector(".form");
const insertDiv = document.getElementById("insert-div");

function getColor() {
  const colorInput = document.getElementById("color-input").value.substring(1);
  const select = document.querySelector(".select").value;

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${colorInput}&mode=${select}&count=5`
  )
    .then((res) => res.json())
    .then((data) => {
      insertDiv.innerHTML = "";

      for (let i = 0; i < data.colors.length; i++) {
        const colorColumn = document.createElement("div");
        colorColumn.classList.add("color-column");
        colorColumn.addEventListener("click", copyText);

        const colorCol = document.createElement("div");
        colorCol.classList.add("color-col");
        colorCol.style.backgroundColor = data.colors[i].hex.value;

        const colorHex = document.createElement("div");
        colorHex.classList.add("color-hex");
        colorHex.textContent = data.colors[i].hex.value;

        colorColumn.appendChild(colorCol);
        colorColumn.appendChild(colorHex);
        insertDiv.appendChild(colorColumn);
      }
    })
    .catch((error) => {
      alert("Error");
    });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  getColor();
});

function copyText() {
  let copyText = this.querySelector(".color-hex");
  let hexValue = copyText.textContent;
  navigator.clipboard.writeText(hexValue);
  alert("Copied the text: " + hexValue);
}
