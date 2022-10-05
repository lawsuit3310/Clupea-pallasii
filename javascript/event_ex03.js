const openBtn  = document.querySelector("#open")
const closeBtn = document.querySelector("#close");

open = () => {
   document.querySelector(".detail").style.display = "block";
   openBtn.style.display = "none"
}
close = () => {
    document.querySelector(".detail").style.display = "none";
    openBtn.style.display = "block"
}

openBtn.addEventListener("click", open);
closeBtn.addEventListener("click", close);