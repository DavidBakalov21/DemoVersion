import defaultOrderCounts from "./food.js";
window.onload = function () {
  const cards = document.querySelectorAll(".Card");
  cards.forEach((card) => {
    card.classList.add("animate-card");
  });
};
let orderCounts =
  JSON.parse(localStorage.getItem("orderCounts")) || defaultOrderCounts;
function addToOrder(food) {
  orderCounts[food].count++;
  localStorage.setItem("orderCounts", JSON.stringify(orderCounts));
  showOverlay(food);
  return "success";
}

function showOverlay(text) {
  const savedData = JSON.parse(localStorage.getItem("orderCounts"));
  let count = savedData[text];
  console.log(count);
  document.getElementById("overlay").classList.remove("hidden");
  document.getElementById("overlay").classList.add(".notHIdden");
  document.getElementById("ChoiceText").textContent = "You ordered " + text;
  document.getElementById("amount").textContent =
    "You already have " + count.count;
  return "success";
}

function closeOverlay() {
  document.getElementById("overlay").classList.add("hidden");
  document.getElementById("overlay").classList.remove(".notHIdden");
  return "success";
}
window.closeOverlay = closeOverlay;
window.addToOrder = addToOrder;
