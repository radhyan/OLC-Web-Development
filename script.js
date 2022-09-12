const hamburger = document.querySelector(".hamburger");
const items = document.querySelector(".items");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    items.classList.toggle("active");
})

document.querySelectorAll(".navItem").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    items.classList.remove("active");
}))