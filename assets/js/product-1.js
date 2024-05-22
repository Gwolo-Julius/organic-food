const product_1 = [
  {
    id: "asdf_001",
    img: "assets/img/popular-product-1.png",
    name: "Green Apple",
    price: 14.99,
    old_price: 20.99,
    rating: "assets/img/Rating.png",
  },
  {
    id: "asdf_002",
    img: "assets/img/popular-product-2.png",
    name: "Fresh Indian Malta",
    price: 20.0,
    old_price: 29.35,
    rating: "assets/img/Rating.png",
  },
  {
    id: "asdf_003",
    img: "assets/img/popular-product-3.png",
    name: "Chinese cabbage",
    price: 12.0,
    old_price: 17.15,
    rating: "assets/img/Rating.png",
  },
  {
    id: "asdf_004",
    img: "assets/img/popular-product-4.png",
    name: "Green Lettuce",
    price: 9.0,
    old_price: 12.99,
    rating: "assets/img/Rating.png",
  },
  {
    id: "asdf_005",
    img: "assets/img/popular-product-5.png",
    name: "Eggplant",
    price: 34.0,
    old_price: 40.11,
    rating: "assets/img/Rating.png",
  },
  {
    id: "asdf_006",
    img: "assets/img/popular-product-6.png",
    name: "Big Potatoes",
    price: 20.0,
    old_price: 22.54,
    rating: "assets/img/Rating.png",
  },
  {
    id: "asdf_007",
    img: "assets/img/popular-product-7.png",
    name: "Corn",
    price: 20.0,
    old_price: 31.21,
    rating: "assets/img/Rating.png",
  },
  {
    id: "asdf_008",
    img: "assets/img/popular-product-8.png",
    name: "Fresh Cauliflower",
    price: 12.0,
    old_price: 18.24,
    rating: "assets/img/Rating.png",
  },
  {
    id: "asdf_009",
    img: "assets/img/popular-product-9.png",
    name: "Green Capsicum",
    price: 9.0,
    old_price: 20.99,
    rating: "assets/img/Rating.png",
  },
  {
    id: "asdf_010",
    img: "assets/img/popular-product-10.png",
    name: "Green Chili",
    price: 30.0,
    old_price: 38.09,
    rating: "assets/img/Rating.png",
  },
];

const shopContainer = document.querySelector(".popular__products-items");

generateShop();
function generateShop() {
  return (shopContainer.innerHTML = product_1
    .map((item) => {
      const { id, name, img, price, old_price, rating } = item;
      return `
      <div class="popular__products-card">
        <span class="reduced__percent">Sale 50%</span>
        <div class="product__view">
          <div class="product__view-1">
            <i class="ri-heart-line"></i>
          </div>
          <div class="product__view-2">
            <i class="ri-eye-line"></i>
          </div>
        </div>
        <img
          src="${img}"
          alt=""
          class="popular__products-image"
        />
        <div class="popular__cards-info">
          <div class="popular__cards-desc">
            <p class="popular__product-name">${name}</p>
            <div class="price__div">
              <h4 class="price">$${price.toFixed(2)}</h4>
              <delete class="delete__price">$${old_price}</delete>
            </div>
            <img src="${rating}" alt="" class="stars" />
          </div>
          <div class="popular__card-bag js-shopping-bag" data-product-id="${id}">
            <i class="ri-shopping-bag-line card__bag"></i>
          </div>
        </div>
      </div>
    `;
    })
    .join(""));
}
// console.log(shopContainer)

document.querySelectorAll(".js-shopping-bag").forEach((bag) => {
  bag.addEventListener("click", () => {
    const productId = bag.dataset.productId;

    let matchingItem;
    cart.forEach((item) => {
      if (productId === item.productId) {
        matchingItem = item;
      }
    });

    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      cart.push({
        productId,
        quantity: 1,
      });
    }

    let cartQuantity = 0;

    cart.forEach((item) => {
      cartQuantity += item.quantity;
    });

    document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
  });
});
