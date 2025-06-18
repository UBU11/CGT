const btn = document.querySelectorAll("button");
const display = document.getElementById("display")

btn.forEach((item)=>{
    item.addEventListener("click",(e)=>{
        console.log("clicked",e.target.textContent)
        display.innerText= e.target.textContent;
    })
})

