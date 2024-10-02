const products = [
  {
    id: 1,
    name: "Strike Endurance Tee",
    image: "assets/images/products/1.jpg",
    price: 39.0,
    rating: 4.5,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["black", "blue", "orange"],
  },
  {
    id: 2,
    name: "Erikssen CoolTech™ Fitness Tank",
    image: "assets/images/products/2.jpg",
    price: 29.0,
    rating: 4,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["lightblue", "pink", "purple"],
  },
  {
    id: 3,
    name: "Primo Endurance Tank",
    image: "assets/images/products/3.jpg",
    price: 49.0,
    rating: 1,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["black", "green", "yellow"],
  },
  {
    id: 4,
    name: "Helios Endurance Tank",
    image: "assets/images/products/4.jpg",
    price: 59.0,
    rating: 5,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["black", "blue", "red"],
  },
  {
    id: 5,
    name: "Rocco Gym Tank",
    image: "assets/images/products/5.jpg",
    price: 89.0,
    rating: 4,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["gray", "orange", "red"],
  },
  {
    id: 6,
    name: "Vulcan Weightlifting Tank",
    image: "assets/images/products/6.jpg",
    price: 39.0,
    rating: 4.5,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["blue", "red", "yellow"],
  },
  {
    id: 7,
    name: "Argus All-Weather Tank",
    image: "assets/images/products/7.jpg",
    price: 29.0,
    rating: 4,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["gray", "orange", "red"],
  },
  {
    id: 8,
    name: "Sparta Gym Tank",
    image: "assets/images/products/8.jpg",
    price: 49.0,
    rating: 1,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["blue", "red", "yellow"],
  },
  {
    id: 9,
    name: "Sinbad Fitness Tank",
    image: "assets/images/products/9.jpg",
    price: 59.0,
    rating: 5,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["gray", "orange", "red"],
  },
  {
    id: 10,
    name: "Rocco Gym Tank",
    image: "assets/images/products/10.jpg",
    price: 89.0,
    rating: 4,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["yellow", "lightgray", "orange"],
  },
  {
    id: 11,
    name: "Atlas Fitness Tank",
    image: "assets/images/products/11.jpg",
    price: 89.0,
    rating: 4,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["gray", "orange", "red"],
  },
  {
    id: 12,
    name: "Cassius Sparring Tank",
    image: "assets/images/products/12.jpg",
    price: 89.0,
    rating: 4,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["blue", "purple", "yellow"],
  },
];

const filters = [
  {
    id: 1,
    filterName: "Category",
    filterOptions: ["Tops", "Bottoms"],
    numOfProduct: [48, 24],
  },
  {
    id: 2,
    filterName: "Style",
    filterOptions: ["Base Layer", "Compression", "Leggings"],
    numOfProduct: [15, 5, 4, 8, 1, 10, 23],
  },
];

const productCardsContainer = document.getElementById("product-cards");

products.map((product) => {
  const card = document.createElement("div");
  card.classList.add("product_card");

  card.innerHTML = `
        <div class="image"><img src="${product.image}" alt="${
    product.name
  }"></div>
        <div class="product_details">
            <div class="name">${product.name}</div>
            <div class="star-rating">
                ${Array.from(
                  { length: 5 },
                  (_, i) => `
                    <input type="radio" id="${product.id}-star-${
                    i + 1
                  }" name="rating-${product.id}" value="${i + 1}" ${
                    i < Math.floor(product.rating) ? "checked" : ""
                  } />
                    <label for="${product.id}-star-${
                    i + 1
                  }" class="star">&#9733;</label>
                `
                ).join("")}
            </div>
            <div class="size">
                ${product.sizes
                  .map((size) => `<span class="size-option">${size}</span>`)
                  .join("")}
            </div>
            <div class="color">
              ${product.colors
                .map(
                  (color) =>
                    `<span class="size-option" style="background-color: ${color};"></span>`
                )
                .join("")}
            </div>

            <div class="price">As low as <span>$${product.price.toFixed(
              2
            )}</span></div>
            <div class="cart_wishlist">
                <div class="cartbtn"><button><span>Add to cart</span></button></div>
                <div class="sub_btn">
                    <span class="wishlist"></span>
                    <span class="compare"></span>
                </div>
            </div>
        </div>
    `;

  productCardsContainer.appendChild(card);
});

$(".size-option").click(function () {
  $(this).siblings(".size-option").removeClass("selected");
  $(this).toggleClass("selected");
});

$(".wishlist").click(function () {
  $(this).toggleClass("like");
});

$(".compare").click(function () {
  $(this).toggleClass("compare_hover");
});

$(document).ready(function () {
  $(".page-number").click(function () {
    $(".page-number").removeClass("clicked");
    $(this).addClass("clicked");
  });

  $(".prev-btn").click(function () {
    let currentPage = $(".page-number.clicked");
    let prevPage = currentPage.prev(".page-number");

    if (prevPage.length) {
      currentPage.removeClass("clicked");
      prevPage.addClass("clicked");
    }
  });

  $(".next-btn").click(function () {
    let currentPage = $(".page-number.clicked");
    let nextPage = currentPage.next(".page-number");

    if (nextPage.length) {
      currentPage.removeClass("clicked");
      nextPage.addClass("clicked");
    }
  });
});

$(".filter-option").click(function () {
  $(this).next(".filter-option-content").toggleClass("filter_dropdown");
  $(this).find(".down_arrow").toggleClass("rotate_arrow");
});

$(".sidebar_header").click(function () {
  $(".filters-content").toggleClass("main_toggle");
  $(this).find(".down_arrow").toggleClass("rotate_arrow");
});

if (window.innerWidth < 768) {
  $(".sidebar_header").click(function () {    
    $(this).toggleClass("sidebar_header_border");
    $(".sidebar").toggleClass("sidebar_border");     
  });
}
