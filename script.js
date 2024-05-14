const image = document.getElementById("image")
const btn = document.getElementById("btn")
const text = document.getElementById("text1")

btn.addEventListener("click", () => {
    if (text.value.length > 0) {
        image.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + text.value
        image.classList.add("show-img")
    } else {
        text.classList.add("animation")
        text.style.borderColor = "red"
        setTimeout(() => {
            text.classList.remove("animation")
            text.style.borderColor = ""
        }, 1000);
    }
})