const category = new URLSearchParams(window.location.search).get("category");
let productCard = document.querySelector("#product_list_container");
if (productCard) {
  fetch(`https://kea-alt-del.dk/t7/api/products?limit=32&category=${category}`)
    .then((response) => response.json())
    .then((data) => showList(data));

  function showList(products) {
    const markup = products
      .map(
        (data) => `
            <a href="product.html?id=${data.id}" class="productItem">
                <article class="smallProduct">
                    <img src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp" alt="product image" />
                    <h3>${data.productdisplayname}</h3>
                    <p class="subtle">${data.articletype} | ${data.brandname}</p>
                    <p class="price ${data.soldout ? "dashed" : ""} ${data.discount ? "dashed" : ""}">DKK <span>${data.price}</span>,-</p>
                    ${data.discount ? `<p class="discountPrice">NOW DKK ${Math.floor(data.price * (1 - data.discount / 100))},-</p>` : ""}
                    ${data.soldout ? `<p class="soldOutLabel">SOLD OUT</p>` : ""}
                    ${data.discount ? `<p class="saleLabel">-${data.discount}%</p>` : ""}
                    <p><span class="readBottom">Read More</span></p>
                </article>
            </a>
        `
      )
      .join("");
    productCard.innerHTML = markup;
  }
}
