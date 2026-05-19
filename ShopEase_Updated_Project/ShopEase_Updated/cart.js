let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  const container = document.getElementById("cart-container");
  container.innerHTML = "";

  cart.forEach((item, index) => {
    container.innerHTML += `
      <div class="cart-item">
        
        <div style="display:flex; align-items:center; gap:15px;">
          <img src="${item.image}" width="80" height="80" style="border-radius:10px;">
          
          <div>
            <h3>${item.name}</h3>
            <p>₹${item.price}</p>
          </div>
        </div>

        <!-- REMOVE BUTTON (IMPORTANT FIX) -->
        <button onclick="removeItem(${index})"
          style="background:red; color:white; border:none; padding:8px 12px; border-radius:6px; cursor:pointer;">
          Remove
        </button>

      </div>
    `;
  });
}

function removeItem(index) {
  cart.splice(index, 1); // remove product
  localStorage.setItem("cart", JSON.stringify(cart)); // update storage
  renderCart(); // refresh UI
}

renderCart();