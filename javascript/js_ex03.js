cal = (op) => function(){
    let num1 = parseInt(document.getElementById("num1").value)
    let num2 = parseInt(document.getElementById("num2").value)
    switch(op)
    {
        case "+":
            result = num1 + num2
            break;
         case "-":
            result = num1 - num2
            break;
        case "*":
            result = num1 * num2
            break;
        case "/":
            result = num1 / num2
            break;    
    }
    document.querySelector("#result").value = result;
}

document.querySelectorAll(".cal").forEach(element => {
    element.onclick = cal(element.textContent)
    
});
