// 21 items with Indian Rupee base prices
const items = [
  {
    img: "https://via.placeholder.com/220x160/795548/fff?text=Dining+Table",
    title: "Dining Table",
    location: "Delhi",
    price: 15000,
  },
  {
    img: "https://via.placeholder.com/220x160/3f51b5/fff?text=Yamaha+Guitar",
    title: "Yamaha Acoustic Guitar",
    location: "Mumbai",
    price: 8000,
  },
  {
    img: "https://via.placeholder.com/220x160/00bcd4/fff?text=Thinkpad+X1",
    title: "Lenovo ThinkPad X1",
    location: "Bangalore",
    price: 90000,
  },
  {
    img: "https://via.placeholder.com/220x160/f0a500/fff?text=Books",
    title: "Used Bundle of Books",
    location: "Pune",
    price: 1200,
  },
  {
    img: "https://via.placeholder.com/220x160/9c27b0/fff?text=Keyboard",
    title: "Redragon K552 Keyboard",
    location: "Hyderabad",
    price: 2200,
  },
  {
    img: "https://via.placeholder.com/220x160/e91e63/fff?text=iPhone+XR",
    title: "iPhone XR",
    location: "Chennai",
    price: 28000,
  },
  {
    img: "https://via.placeholder.com/220x160/ff4444/fff?text=Honda+CRF",
    title: "20004 Honda CRF",
    location: "Kolkata",
    price: 85000,
  },
  {
    img: "https://via.placeholder.com/220x160/8bc34a/fff?text=Nike+Sneakers",
    title: "Nike Sneakers",
    location: "Ahmedabad",
    price: 4500,
  },
  {
    img: "https://via.placeholder.com/220x160/4caf50/fff?text=4+Wheelers",
    title: "Razor 4 Wheelers",
    location: "Lucknow",
    price: 7000,
  },
  {
    img: "https://via.placeholder.com/220x160/2196f3/fff?text=iPhone",
    title: "iPhone",
    location: "Jaipur",
    price: 30000,
  },
  {
    img: "https://via.placeholder.com/220x160/607d8b/fff?text=Macbook+Pro",
    title: "MacBook Pro 2017",
    location: "Delhi",
    price: 55000,
  },
  {
    img: "https://via.placeholder.com/220x160/009688/fff?text=Refrigerator",
    title: "Whirlpool Refrigerator",
    location: "Mumbai",
    price: 20000,
  },
  {
    img: "https://via.placeholder.com/220x160/ff9800/fff?text=Toyota+Fortuner",
    title: "Toyota Fortuner 4x4",
    location: "Chandigarh",
    price: 3200000,
  },
  {
    img: "https://via.placeholder.com/220x160/cddc39/fff?text=Honda+Activa",
    title: "Honda Activa",
    location: "Bhopal",
    price: 65000,
  },
  {
    img: "https://via.placeholder.com/220x160/ff5722/fff?text=PS4+Games",
    title: "PS4 Games Bundle",
    location: "Surat",
    price: 3500,
  },
  {
    img: "https://via.placeholder.com/220x160/795548/fff?text=Sewing+Machine",
    title: "Sewing Machine",
    location: "Indore",
    price: 8000,
  },
  {
    img: "https://via.placeholder.com/220x160/673ab7/fff?text=Nerf+Guns",
    title: "Nerf Guns & Toys",
    location: "Patna",
    price: 4000,
  },
  {
    img: "https://via.placeholder.com/220x160/ff5722/fff?text=Hotwheels",
    title: "Hotwheels CSS Collection",
    location: "Nagpur",
    price: 2500,
  },
  {
    img: "https://via.placeholder.com/220x160/9e9e9e/fff?text=Drum+Kit",
    title: "Havana Acoustic Drum Kit",
    location: "Goa",
    price: 20000,
  },
  {
    img: "https://via.placeholder.com/220x160/3f51b5/fff?text=Yamaha+Organ",
    title: "Yamaha PSR Organ",
    location: "Coimbatore",
    price: 30000,
  },
  {
    img: "https://via.placeholder.com/220x160/4caf50/fff?text=Study+Table",
    title: "Study Table",
    location: "Noida",
    price: 7000,
  },
];

// Shuffle function
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function renderItems() {
  const container = document.getElementById("marketplace");
  container.innerHTML = "";

  let products = [...items];
  shuffleArray(products);

  products.forEach((item) => {
    // Price variation ±20%
    let variation = (Math.random() * 0.4 - 0.2) * item.price;
    let adjustedPrice = Math.max(0, Math.round(item.price + variation));

    // Format as INR
    let priceText =
      adjustedPrice === 0
        ? "FREE"
        : "₹" + adjustedPrice.toLocaleString("en-IN");

    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
          <img src="${item.img}" alt="${item.title}">
          <div class="info">
            <div class="price">${priceText}</div>
            <div class="title">${item.title}</div>
            <div class="location">${item.location}</div>
          </div>
        `;
    container.appendChild(card);
  });
}

// Run on first load
renderItems();
