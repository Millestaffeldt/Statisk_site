const myId = new URLSearchParams(window.location.search).get("id");
const productImage = document.getElementById("productImage");
const productName = document.getElementById("productName");
const productType = document.getElementById("productType");
const productPrice = document.getElementById("productPrice");
const discountPrice = document.getElementById("discountPrice");
const soldOutLabel = document.getElementById("soldOutLabel");
const saleLabel = document.getElementById("saleLabel");
const sizeOptions = document.getElementById("sizeOptions");

fetch(`https://kea-alt-del.dk/t7/api/products/${myId}`)
  .then((response) => response.json())
  .then((data) => {
    productImage.src = `https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp`;
    productName.textContent = data.productdisplayname;
    productType.textContent = `${data.articletype} | ${data.brandname}`;
    productPrice.textContent = `Price: DKK ${data.price}`;

    if (data.discount) {
      discountPrice.textContent = `NOW: DKK ${Math.floor(data.price * (1 - data.discount / 100))}`;
      saleLabel.textContent = `-${data.discount}%`;
    } else {
      discountPrice.style.display = "none";
      saleLabel.style.display = "none";
    }

    if (data.soldout) {
      soldOutLabel.style.display = "block";
    } else {
      soldOutLabel.style.display = "none";
    }

    // Dynamisk indsættelse af størrelser
    const sizes = ["EU 36", "EU 37", "EU 38", "EU 39", "EU 40", "EU 41", "EU 42"];
    sizes.forEach((size) => {
      const sizeButton = document.createElement("button");
      sizeButton.textContent = size;
      sizeButton.className = "size-button";
      sizeOptions.appendChild(sizeButton);
    });
  });
