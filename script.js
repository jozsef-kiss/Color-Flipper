const button = document.querySelector(".btn");

button.addEventListener("click", change);



function change () {

// hexa converting
let hexaNum1 = Math.floor(Math.random() * 256).toString(16);
let hexaNum2 = Math.floor(Math.random() * 256).toString(16);
let hexaNum3 = Math.floor(Math.random() * 256).toString(16);

let changed = "#" + hexaNum1+hexaNum2+hexaNum3;

// Body-change-color
document.body.style.backgroundColor = changed;

//btn-change-bg
document.querySelector(".btn").style.backgroundColor = changed;
    
//text-change
document.querySelector(".text").innerText = "BACKGROUND COLOR: " + changed;

}
