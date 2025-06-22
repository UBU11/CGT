
const btn = document.querySelectorAll("button");
const display = document.getElementById("display");
let randNum = [];
for (let i = 0; i < 3; i++) {
    randNum.push(Math.floor(Math.random() * 9) +1)
    
}
console.log(randNum)
let i = 0
let setDisplay = setInterval(() => {
    display.innerText = randNum[i]
    i++;
    if(i>3){
        clearInterval(setDisplay)
        display.innerText=""
    }
}, randNum.length * 500);
 
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

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
            // timer = duration; // uncomment this line to reset timer automatically after reaching 0
        }
    }, 1000);
}

window.onload = function () {
    var time = 60 / 2, // your time in seconds here
        display = document.querySelector('#safeTimerDisplay');
    startTimer(time, display);
};

