const btnShare = document.querySelector(".footer-button");
const footer = document.querySelector(".footer");
const popup = document.querySelector(".footer-popup");
const profile = document.querySelector(".footer-profile");

function resetUI() {
  if (window.innerWidth < 768) {
    popup.classList.remove("flex");
    btnShare.classList.remove("hover");
    footer.classList.remove("primary-clr");
    profile.classList.remove("hidden");
  } else {
    popup.classList.remove("flex");
    btnShare.classList.remove("hover");
    footer.classList.remove("primary-clr");
    profile.classList.remove("hidden");
  }
}

btnShare.addEventListener("click", () => {
  if (window.innerWidth < 768) {
    profile.classList.toggle("hidden");
    footer.classList.toggle("primary-clr");
  }
  popup.classList.toggle("flex");
  btnShare.classList.toggle("hover");
});

window.addEventListener("resize", resetUI);
