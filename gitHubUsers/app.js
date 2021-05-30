const title = document.querySelector(".section-title h1");
const btnContainer = document.querySelector(".btn-container");

let index = 1;
let pages = [];

const setupUI = () => {
  displayFollowers(pages[index]);
  displayButtons(btnContainer, pages, index);
};

const init = async () => {
  const followers = await fetchFollowers();

  pages = paginate(followers);
  setupUI();
};

btnContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-container")) return;
  if (e.target.classList.contains("page-btn")) {
    index = parseInt(e.target.dataset.index);
  }
  setupUI();
});

window.addEventListener("load", init);
