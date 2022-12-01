const mainContainer = document.querySelector(".card");
const thanksContainer = document.querySelector(".thank-you");
const submit = document.getElementById("submit");
const rating = document.querySelector(".rates");
const rates = document.querySelectorAll(".rating");

submit.addEventListener("click", () => {
  thanksContainer.classList.remove("hidden");
  mainContainer.style.display = "none";
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});
