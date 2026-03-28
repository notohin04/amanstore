let cart = [];
let count = 0;

function addToCart(name, price) {
  cart.push({name, price});
  count++;
  document.getElementById("cartCount").innerText = count;
  alert(name + " added to cart!");
}

function viewCart() {
  let message = "Cart Items:\n";
  let total = 0;

  cart.forEach(item => {
    message += item.name + " - ₹" + item.price + "\n";
    total += item.price;
  });

  message += "\nTotal: ₹" + total;

  alert(message);
}

// Contact Info Function
function showContact() {
  alert("📞 Phone: 9084170126\n📧 Email: yourstore@gmail.com");
}
