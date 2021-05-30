// local reviews data
const reviews = [
  {
    id: 1,
    name: "Atomic Habits ",
    job: "By James Clear",
    img: "./pictures/book-one.jpg",
    text:
      "Jhon Haddad : I will divide the review into 5 parts. The first part is a summary of the book with short excerpts highlighted while taking notes. Next, I hope to share pieces of advice that have motivated me while building new habits. Following that, I will share how I implemented the first 3 habits throughout these months. Then, some thoughts to whom I would recommend reading the book. Last, there are 4 complementary readings.",
  },
  {
    id: 2,
    name: "The 4-Hour Workweek",
    job: "by Timothy Ferriss",
    img: "./pictures/book-two.jpg",
    text:
      " Jeffrey W. Fredericks : I am honestly not entirely sure what to say about this book. The message is stop working harder, start working smarter. As a USA Today bestselling author with multiple number 1's under my belt, I wasn't completely sure how the advice in this book would apply to me, but actually, I came up with several ways to implement this without quitting writing (to move into sales) or hiring a ghostwriter. ",
  },
  {
    id: 3,
    name: "Rental Property Investing",
    job: "by Brandon Turner",
    img: "./pictures/book-three.jpg",
    text:
      "Breigha Adeyemo: My husband and I are just starting out in our real estate investment business and this book really breaks everything down for you, especially when it comes to calculating your ROI before making a purchase/deal and learning about the pros & CONS of each type of rental property. I love that he’s so honest and doesn’t just tell you that there’s one right way to do real estate. ",
  },
  {
    id: 4,
    name: "Investing In Real Estate ",
    job: "by Brandon Turner",
    img: "./pictures/book-five.jpg",
    text:
      "Jordan Figlioli: This was my first Real Estate Investing book to read and it was helpful. The way the author explains things is easy to understand, but this also seems like it's more intended for novice investors. I just finished Building Wealth One House at a Time and it got more into the numbers side of things, but still probably more for novice investors. I just started What Every Investor Needs to Know About Cash Flow - definitely more advanced number crunching involved here.",
  },
];

const img = document.getElementById("person-img");
const autor = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  autor.innerText = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
