const cars = [
  {
    id: 1,
    title: "Audi A1",
    category: "audi",
    age: 2021,
    price: 1329.99,
    img: "./images/audi-a1.jpg",
  },

  {
    id: 2,
    title: "Audi A2",
    category: "audi",
    age: 2021,
    price: 1544.99,
    img: "./images/audi-a2.jpg",
  },

  {
    id: 3,
    title: "Audi A3",
    category: "audi",
    age: 2020,
    price: 1557.99,
    img: "./images/audi-a3.jpg",
  },
  {
    id: 4,
    title: "Audi A4",
    category: "audi",
    age: 2018,
    price: 1545.99,
    img: "./images/audi-a4.jpg",
  },
  {
    id: 5,
    title: "Audi A5",
    category: "audi",
    age: 2021,
    price: 15445.99,
    img: "./images/audi-a5.jpg",
  },

  {
    id: 6,
    title: "BMW X1",
    category: "bmw",
    price: 15445.99,
    age: 2020,
    img: "./images/bmw-x1.jpg",
  },
  {
    id: 7,
    title: "BMW X2",
    category: "bmw",
    price: 54.4599,
    age: 2020,
    img: "./images/bmw-x2.jpg",
  },
  {
    id: 8,
    title: "BMW X3",
    category: "bmw",
    price: 11445.99,
    age: 2018,
    img: "./images/bmw-x3.jpg",
  },

  {
    id: 9,
    title: "BMW X4",
    category: "bmw",
    price: 15445.99,
    age: 2012,
    img: "./images/bmw-x4.jpg",
  },
  {
    id: 10,
    title: "BMW X5",
    category: "bmw",
    price: 154.459,
    age: 2012,
    img: "./images/bmw-x5.jpg",
  },
  {
    id: 11,
    title: "BMW X6",
    category: "bmw",
    price: 100.999,
    age: 2030,
    img: "./images/bmw-x6.jpg",
  },
  {
    id: 12,
    title: "Dacia  Logan",
    category: "dacia",
    age: 2020,
    price: 16.445,
    img: "./images/dacia-logan.jpg",
  },
  {
    id: 13,
    title: "Dacia Sandero",
    category: "dacia",
    age: 2020,
    price: 15.445,
    img: "./images/dacia-sandero.jpg",
  },

  {
    id: 14,
    title: "Dacia Duster",
    category: "dacia",
    age: 2020,
    price: 20.445,
    img: "./images/dacia-duster.jpg",
  },
  {
    id: 15,
    title: "Dacia Solenza",
    category: "dacia",
    age: 2004,
    price: 15.445,
    img: "./images/dacia-solenza.jpg",
  },
];

const sectionCenter = document.querySelector(".section-center");
const filterBtn = document.querySelectorAll(".filter-btn");

window.addEventListener("DOMContentLoaded", function () {
  displayCars(cars);
});

filterBtn.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const category = e.currentTarget.dataset.id;

    const carCategory = cars.filter(function (id) {
      if (id.category === category) {
        return id;
      }
    });

    if (category === "all") {
      displayCars(cars);
    } else {
      displayCars(carCategory);
    }
  });
});

function displayCars(carItmes) {
  let display = carItmes.map(function (item) {
    return `<div class="card">
    <img src="${item.img}" alt="menu-item" />
    <div class="text">
      <div class="bold">
        <h1>${item.title}</h1>
        <h3>1.6 TDI Sport 3dr ${item.age}</h3>
      </div>
      <div class="price">
        <p>From <span>$137</span>7 monthly or <span>${item.price}</span></p>
      </div>
      <div class="mile">
        <p>67k miles <span>Desel</span> <span>Manual</span></p>
      </div>
    </div>
  </div> `;
  });

  display = display.join("");
  sectionCenter.innerHTML = display;
}
