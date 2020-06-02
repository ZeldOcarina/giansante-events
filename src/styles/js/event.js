const showMoreBtns = document.getElementsByClassName("btn-event--more");
const showLessBtns = document.getElementsByClassName("btn-event--less");

export default function Event() {
  for (let showMoreBtn of showMoreBtns) {
    showMoreBtn.addEventListener("click", (e) => {
      e.target.classList.add("d-none");
      e.target.nextElementSibling.classList.remove("d-none");
    });
  }

  for (let showLessBtn of showLessBtns) {
    showLessBtn.addEventListener("click", (e) => {
      e.target.parentElement.previousElementSibling.classList.remove("d-none");
      e.target.parentElement.classList.add("d-none");
    });
  }
}
