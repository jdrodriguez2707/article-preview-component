const shareIcon = document.querySelector("#share-icon");
const authorSection = document.querySelector("#author-section");
const shareSection = document.querySelector("#share-section");
const shareIconActive = document.querySelector("#share-icon-active");
const shareIconWhite = document.querySelector("#share-icon-white");

shareIcon.addEventListener("touchstart", showShareSection);
shareIcon.addEventListener("click", showShareSectionActive);
shareIconActive.addEventListener("touchstart", showAuthorSection);
shareIconWhite.addEventListener("click", hideShareSectionActive);

function showShareSection(event) {
  event.preventDefault();
  authorSection.classList.add("inactive");
  shareSection.classList.remove("inactive");
}

function showAuthorSection(event) {
  event.preventDefault();
  shareSection.classList.add("inactive");
  authorSection.classList.remove("inactive");
}

function showShareSectionActive() {
  shareSection.classList.toggle("inactive");
  shareIconWhite.classList.remove("inactive");
  shareIcon.classList.add("inactive");
}

function hideShareSectionActive() {
  shareSection.classList.add("inactive");
  shareIconWhite.classList.add("inactive");
  shareIcon.classList.remove("inactive");
}
