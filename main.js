const gray_heart = document.querySelector('.gray-heart');
const red_heart = document.querySelector('.red-heart');
const container = document.getElementById("yes-no-date");
const yess = document.querySelector('.det');
const noo = document.querySelector('.khum');

gray_heart.addEventListener("click", () => {
    red_heart.classList.add("animation");
    gray_heart.classList.add("fill-color");
});

red_heart.addEventListener("click", () => {
    red_heart.classList.remove("animation");
    gray_heart.classList.remove("fill-color");
});

yess.addEventListener("click", () => {
    red_heart.classList.toggle("animation");
    gray_heart.classList.toggle("fill-color");
});

noo.addEventListener("mouseover", () => {
    const x = Math.random() * (container.clientWidth - noo.offsetWidth);
    const y = Math.random() * (container.clientHeight - noo.offsetHeight);
    noo.style.left = `${x}px`;
    noo.style.top = `${y}px`;
});
