const btn = document.querySelectorAll("button");
const display = document.getElementById("display");
let randNum = Math.floor(Math.random() * 10);
display.innerText= randNum

btn.forEach((item)=>{
    item.addEventListener("click",(e)=>{
        console.log("clicked",e.target.textContent)  
        display.innerText= e.target.textContent;
        item.style.background = "#B6F500"
        if(e.target.textContent == randNum){
            display.innerText = "TRUE"
            
        }
        else{
            display.innerText = "Try Again"
            item.style.background = "red"
             if(display.innerText != "TRUE")
            setInterval(() => {
                display.innerText= randNum
                item.style.background = "#0093b8"
            }, 2000);
        }

    })
})




