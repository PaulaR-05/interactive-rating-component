const res = document.getElementById("res");
const btn_submit = document.querySelector(".btn_submit");
const ratingCard = document.querySelector(".ratingCard");
const ratingCard2 = document.querySelector(".hidden");
let numberContainer = document.querySelector(".btn_rating");
let rateNumber = document.querySelector(".thankyou-state__result--number");

btn_submit.addEventListener("click", submitOn);

function submitOn() {
  ratingCard.classList.add("hidden");
  ratingCard2.classList.remove("hidden");
}

numberContainer.addEventListener("click", (event) => {
  let numberSelected = event.target.innerText;
  rateNumber.innerHTML = numberSelected;
});
