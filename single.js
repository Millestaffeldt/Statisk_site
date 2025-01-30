let productContainer = document.querySelector(".product-container");
let productId = 1597; // Du kan ændre dette til at være dynamisk med URL-parametre

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `
      <img
        src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp"
        alt="${data.productdisplayname}"
      />
      <div class="pad-top">
        <h5>${data.brandname} | ${data.category}</h5>
        <h2>${data.productdisplayname} | ${data.basecolour}</h2>
        <h2 class="price">${data.price} kr.</h2>
        <form>
          <div class="size-selection">
            <label for="size">Choose a size:</label>
            <select name="size" id="size">
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>
          <button class="add-to-cart">Add to basket</button>
        </form>
        <div class="hover">
          <div class="buy">
            <h3>Buy now</h3>
          </div>
        </div>
        <h3>Product description:</h3>
        <p>${data.description}</p>
      </div>
    `;
  });
