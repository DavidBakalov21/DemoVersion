class Cart {
  constructor() {
    this.defaultOrderCounts = {
      "Royal Cheese": { count: 0, price: 6.99 },
      "Cheeseburger": { count: 0, price: 8.49 },
      "Hamburger": { count: 0, price: 4.99 },
      "McChicken": { count: 0, price: 4.49 },
      "Double Royal Cheese": { count: 0, price: 9.99 },
      "Chicken Roll": { count: 0, price: 5.79 },
      "Medium fries": { count: 0, price: 5.19 },
      "Large fries": { count: 0, price: 6.79 },
      "Chicken McNuggets": { count: 0, price: 5.99 },
      "Toast": { count: 0, price: 6.99 },
      "Twister": { count: 0, price: 8.49 },
      "Dips": { count: 0, price: 4.99 },
      "Chefburger": { count: 0, price: 4.49 },
      "Boxmaster": { count: 0, price: 9.99 },
      "Bucket": { count: 0, price: 5.79 },
      "BBQ pizza": { count: 0, price: 6.99 },
      "Extravaganzza": { count: 0, price: 8.49 },
      "Greece pizza": { count: 0, price: 4.99 },
      "Grill pizza": { count: 0, price: 4.49 },
      "Karbonara": { count: 0, price: 9.99 },
      "Marharyta": { count: 0, price: 5.79 },
    };
    this.orderCounts =
      JSON.parse(localStorage.getItem("orderCounts")) ||
      this.defaultOrderCounts;
    document.addEventListener("DOMContentLoaded", () =>
      this.displayOrderCounts()
    );
  }
  displayOrderCounts() {
    let container = document.getElementById("orderedItems");
    container.innerHTML = "";

    let total = 0;

    Object.entries(this.orderCounts).forEach(([key, item]) => {
      if (item.count > 0) {
        const itemElem = document.createElement("div");
        itemElem.classList.add("ordered-item");

        const priceForAllItems = item.count * item.price;
        total += priceForAllItems;

        itemElem.textContent = `Food: ${key}, Count: ${
          item.count
        }, Total Price: $${priceForAllItems.toFixed(2)}`;
        itemElem.style = "color: yellow;";
        const deleteBtn = this.createDeleteButton(key);
        const reduceBtn = this.createReduceButton(key);
        const addBtn = this.createAddButton(key);
        itemElem.appendChild(reduceBtn);
        itemElem.appendChild(addBtn);
        itemElem.appendChild(deleteBtn);
        container.appendChild(itemElem);
      }
    });

    const totalElem = document.createElement("div");
    totalElem.classList.add("total-amount");
    totalElem.textContent = `Total: $${total.toFixed(2)}`;
    container.appendChild(totalElem);
  }
  createReduceButton(key){
    const reduceBtn = document.createElement("button");
    reduceBtn.textContent = "-";
    reduceBtn.classList.add("btn", "btn-danger");
    reduceBtn.style.marginLeft = "1%";
    reduceBtn.addEventListener("click", () => {
      if(this.orderCounts[key].count>1){
      this.orderCounts[key].count -= 1;

      localStorage.setItem("orderCounts", JSON.stringify(this.orderCounts));
      this.displayOrderCounts();
      }
    });
    return reduceBtn;
}
createAddButton(key){
  const reduceBtn = document.createElement("button");
  reduceBtn.textContent = "+";
  reduceBtn.classList.add("btn", "btn-danger");
  reduceBtn.style.marginLeft = "1%";
  reduceBtn.addEventListener("click", () => {
    this.orderCounts[key].count += 1;
    localStorage.setItem("orderCounts", JSON.stringify(this.orderCounts));
    this.displayOrderCounts();
  });
  return reduceBtn;
}
  createDeleteButton(key) {
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("btn", "btn-danger");
    deleteBtn.style.marginLeft = "1%";
    deleteBtn.addEventListener("click", () => {
      this.orderCounts[key].count = 0;
      localStorage.setItem("orderCounts", JSON.stringify(this.orderCounts));
      this.displayOrderCounts();
    });
    return deleteBtn;
  }
}
window.onload = function () {
  const cards = document.querySelectorAll(".ordered-items-container");
  cards.forEach((card) => {
    card.classList.add("animate-card");
  });
};
const cart = new Cart();

function clearCart() {
  document.getElementById("overlay").classList.remove("hidden");
  document.getElementById("overlay").classList.add(".notHIdden");
}

function closeOverlay() {
  document.getElementById("overlay").classList.add("hidden");
  document.getElementById("overlay").classList.remove(".notHIdden");
}

function deleteOrder() {
  localStorage.removeItem("orderCounts");
  cart.orderCounts = { ...cart.defaultOrderCounts };
  cart.displayOrderCounts();
}

function confirm() {
  document.getElementById("overlay").classList.remove("hidden");
  document.getElementById("overlay").classList.add(".notHIdden");
}

function JOke() {
  fetch("https://v2.jokeapi.dev/joke/Programming")
    .then((response) => response.json())
    .then((data) =>
      displayJoke(data.joke || `${data.setup} - ${data.delivery}`)
    );
}

function displayJoke(JOke) {
  const jokeElement = document.getElementById("Joke");
  const contentJoke = document.getElementById("contentJoke");

  jokeElement.textContent = JOke;
  contentJoke.classList.add("Joke-Animate");
  setTimeout(() => {
    contentJoke.classList.remove("Joke-Animate");
  }, 6000);
}
