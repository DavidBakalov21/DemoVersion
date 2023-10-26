window.onload = function() {
  const cards = document.querySelectorAll('.Card');
  cards.forEach((card) => {
          card.classList.add('animate-card');
  });
}
let defaultOrderCounts = {
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
    "Marharyta": { count: 0, price: 5.79 }
  
};
  let orderCounts = JSON.parse(localStorage.getItem('orderCounts')) || defaultOrderCounts;
  function addToOrder(food) {
    orderCounts[food].count++;
    localStorage.setItem('orderCounts', JSON.stringify(orderCounts));
    showOverlay(food);
    return "success"
}

  function showOverlay(text) {
    const savedData = JSON.parse(localStorage.getItem('orderCounts'));
    let count = savedData[text];
    console.log(count);
    document.getElementById('overlay').classList.remove('hidden');
    document.getElementById('overlay').classList.add('.notHIdden');
    document.getElementById("ChoiceText").textContent="You ordered "+text;
    document.getElementById("amount").textContent="You already have "+count.count;
    return "success"
}

function closeOverlay() {
    document.getElementById('overlay').classList.add('hidden');
    document.getElementById('overlay').classList.remove('.notHIdden');
    return "success"
}