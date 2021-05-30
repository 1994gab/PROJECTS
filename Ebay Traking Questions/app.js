const clickBtn = document.querySelectorAll(".question-btn");

clickBtn.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const parrent = e.currentTarget.parentElement.parentElement;
    parrent.classList.toggle("show-text");
  });
});
