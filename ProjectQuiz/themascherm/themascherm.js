document.addEventListener("DOMContentLoaded", () => {
    const name = localStorage.getItem("spelernaam");
    if (name) {
        document.getElementById("spelernaam").textContent = name;
    }
});
const themas = document.querySelectorAll(".thema");
themas.forEach((thema) => {
    thema/addEventListener("click", () => {
        window.location.href = "../vragenscherm/vragenscherm.html";
    })
})