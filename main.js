const imgElement = document.getElementById("portfolio-image");
const previousBtn = document.getElementById("previous-btn");
const nextBtn = document.getElementById("next-btn");
let currentImageIndex = 0;

previousBtn.addEventListener("click", () => {
  if (currentImageIndex > 0) {
    currentImageIndex--;
    imgElement.src = "images/" + currentImageIndex + ".png";
  }
});

nextBtn.addEventListener("click", () => {
  if (currentImageIndex < 28) {
    currentImageIndex++;
    imgElement.src = "images/" + currentImageIndex + ".png";
  }
});