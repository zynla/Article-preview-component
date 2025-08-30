const btnShare = document.querySelector(".footer-button");
const footer = document.querySelector(".footer");
const popup = document.querySelector(".footer-popup");
const profile = document.querySelector(".footer-profile");

btnShare.addEventListener("click", () => {

    if (window.innerWidth < 768){
        profile.classList.toggle("hidden");
        footer.classList.toggle("primary-clr");
    }
    popup.classList.toggle("flex");
    btnShare.classList.toggle("hover");
});
