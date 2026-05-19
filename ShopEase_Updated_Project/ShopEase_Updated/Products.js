function addToCart(name, price, image){

  let cart =
  JSON.parse(localStorage.getItem("cart"))
  || [];

  const product = {
    name: name,
    price: price,
    image: image
  };

  cart.push(product);

  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );

  alert(name + " added to cart!");

}

/* Search */

const searchInput =
document.getElementById("searchInput");

const productCards =
document.querySelectorAll(".product-card");

searchInput.addEventListener("keyup", () => {

  const value =
  searchInput.value.toLowerCase();

  productCards.forEach(card => {

    const productName =
    card.querySelector("h3")
    .textContent
    .toLowerCase();

    if(productName.includes(value)){

      card.style.display = "block";

    } else {

      card.style.display = "none";

    }

  });

});