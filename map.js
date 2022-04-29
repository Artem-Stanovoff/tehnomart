let imageMap = document.querySelector(".about-map"); // изображение карты jpg";
let userMap = document.querySelector(".about-map-iframe-box"); // карта;
let closeMap = document.querySelector(".btn-map-close"); // кнопка закрыть;

imageMap.addEventListener("click", function () {
    userMap.classList.remove("visually-hidden");
});

closeMap.addEventListener("click", function () {
    userMap.classList.add("visually-hidden");
});





