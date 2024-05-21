const shareIcon = document.querySelector("#share-icon");
const authorSection = document.querySelector("#author-section");
const shareSection = document.querySelector("#share-section");
const shareIconActive = document.querySelector("#share-icon-active");

shareIcon.addEventListener("touchstart", showShareSection);
shareIconActive.addEventListener("touchstart", showAuthorSection);

function showShareSection() {
  authorSection.classList.add("inactive");
  shareSection.classList.remove("inactive");
}

function showAuthorSection() {
  shareSection.classList.add("inactive");
  authorSection.classList.remove("inactive");
}
