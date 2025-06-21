
const btn = document.querySelectorAll("button");
const display = document.getElementById("display");
let randNum = [];
for (let i = 0; i < 10; i++) {
    randNum.push(Math.floor(Math.random() * 10))
    
}
console.log(randNum)
display.innerText= randNum
let choose = []

btn.forEach((item)=>{
    item.addEventListener("click",(e)=>{
       
        console.log("clicked",e.target.textContent)  
        display.innerText= e.target.textContent;
        choose.push(Number(e.target.textContent))
         let index = choose.length - 1
        console.log(choose)
        if (choose[index]!=randNum[index]) {
            item.style.background = "red"
            choose=[];
            display.innerText = "Try again"
            setTimeout(()=>{
                item.style.background = "blue"
            },1000)
           
            
        //      if(choose.toString() === randNum.toString()){
            
        //     item.style.background = "#B6F500"
        //     display.innerText = "TRUE"
            
        // }
        }
       
        else{
            display.innerText = e.target.textContent
            item.style.background = "green"
            setTimeout(() => {
                item.style.background = "#0093b8"
            }, 2000);

            if (choose.length === randNum.length ) {
                if (choose.toString() == randNum.toString()) {
                    
                      display.innerText = "You won"
                display.style.background = "purple"
                }
              
            }
        }

    })
})




