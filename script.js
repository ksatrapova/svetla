let svetlo = document.querySelector(".svetlo")

let svestka = document.querySelector(".svestka")
svestka.addEventListener("click",function(){
    svetlo.style.backgroundColor = "plum"
})

let zelena = document.querySelector(".zelena")
zelena.addEventListener("click",function(){
    svetlo.style.backgroundColor = "lime"
})

let rajcatova = document.querySelector(".rajcatova")
rajcatova.addEventListener("click",function(){
    svetlo.style.backgroundColor = "tomato"
})
/*
setInterval(function(){
    svetlo.style.backgroundColor = "tomato"
}, 1800)

setInterval(function(){
    svetlo.style.backgroundColor = "lime"
}, 1600)

setInterval(function(){
    svetlo.style.backgroundColor = "plum"
}, 1900)
*/
let barvy = ["tomato", "lime", "plum", "cyan", "hotpink", "yellow"]
let pocetTiku = 0
let casovac

let stop = document.querySelector(".stop")
stop.addEventListener("click",function(){
    clearInterval(casovac)
})

let start = document.querySelector(".start")
start.addEventListener("click",function(){
 casovac = setInterval(function(){
svetlo.style.backgroundColor = barvy[pocetTiku]
if (pocetTiku >4) {
    pocetTiku = 0
}
else{
    pocetTiku += 1
}
//pocetTiku ++
}, 1000)})


