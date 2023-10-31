import defaultOrderCounts from "./food.js";

class Cart {
  constructor() {
    this.defaultOrderCounts = defaultOrderCounts;
    this.orderCounts =
      JSON.parse(localStorage.getItem("orderCounts")) ||
      this.defaultOrderCounts;
    document.addEventListener("DOMContentLoaded", () =>
      this.displayOrderCounts()
    );
  }
  displayOrderCounts() {
    let container = document.getElementById("orderedItems");
    if (!container) {
      return;
    }
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
  createReduceButton(key) {
    const reduceBtn = document.createElement("button");
    reduceBtn.textContent = "-";
    reduceBtn.classList.add("btn", "btn-danger");
    reduceBtn.style.marginLeft = "1%";
    reduceBtn.addEventListener("click", () => {
      if (this.orderCounts[key].count > 1) {
        this.orderCounts[key].count -= 1;

        localStorage.setItem("orderCounts", JSON.stringify(this.orderCounts));
        this.displayOrderCounts();
      }
    });
    return reduceBtn;
  }
  createAddButton(key) {
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
  addItem(name, price, count) {
    if (this.orderCounts[name]) {
      alert(`"${name}" already in cart!`);
      return;
    }

    if (price <= 0 || isNaN(price)) {
      alert("Price must be a positive number!");
      return;
    }
    if (count < 0 || isNaN(count) || !Number.isInteger(+count)) {
      alert("Count must be a non-negative integer!");
      return;
    }
    this.orderCounts[name] = { count: parseInt(count), price: price };
    localStorage.setItem("orderCounts", JSON.stringify(this.orderCounts));

    this.displayOrderCounts();
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
  const navbarPlaceholder = document.getElementById("navbarPlaceholder");
  if (!navbarPlaceholder) {
    return;
  }
  navbarPlaceholder.innerHTML = getNavTemplate();
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

function confirmConfirm() {
  document.getElementById("overlayConfirm").classList.remove("hidden");
  document.getElementById("overlayConfirm").classList.add(".notHIdden");
}
function closeOverlayConfirm() {
  document.getElementById("overlayConfirm").classList.add("hidden");
  document.getElementById("overlayConfirm").classList.remove(".notHIdden");
}

function deleteOrderConfirm() {
  deleteOrder();
  alert("Your order is on its way to you");
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
function AddToCart() {
  let name = document.getElementById("nameF").value;
  let quantity = parseInt(document.getElementById("quantityF").value, 10);
  let price = parseFloat(document.getElementById("priceF").value);
  cart.addItem(name, price, quantity);
}
window.closeOverlay = closeOverlay;
window.confirm = confirm;
window.JOke = JOke;
window.displayJoke = displayJoke;
window.clearCart = clearCart;
window.deleteOrder = deleteOrder;
window.AddToCart = AddToCart;
window.deleteOrderConfirm = deleteOrderConfirm;
window.confirmConfirm = confirmConfirm;
window.closeOverlayConfirm = closeOverlayConfirm;
