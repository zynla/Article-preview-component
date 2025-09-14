const profile = document.querySelector(".footer-profile");
const popup = document.querySelector(".footer-popup");
const btnShare = document.querySelector(".footer-button");
const footer = document.querySelector(".footer");

btnShare.addEventListener("click", () => {
    if (innerWidth < 768) {
        footer.classList.toggle("primary-clr");
        profile.classList.toggle("hidden");
    }
    else{
        footer.classList.remove("primary-clr");
    }
    popup.classList.toggle("flex");
});

window.addEventListener("resize", () => {
    if (window.innerWidth < 768){
        footer.classList.remove("primary-clr");
        profile.classList.remove("hidden");     
        popup.classList.remove("flex");
        popup.classList.add("hidden");

    }
    else{
        popup.classList.toggle("hidden");
    }
});









