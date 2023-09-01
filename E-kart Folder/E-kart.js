const addToCartButtons = document.querySelectorAll(".add-to-cart");

addToCartButtons.forEach((button) => {
  button.addEventListener("click", addToCart);
});

function addToCart() {
  alert("Item added to cart!");
}
