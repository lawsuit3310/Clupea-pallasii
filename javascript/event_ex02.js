const c1 = document.querySelector("#c1")

imgs = document.querySelectorAll(".big");

imgs.forEach(element => {
    
    element.addEventListener("click",function(){
        c1.src = element.src;
    });
});