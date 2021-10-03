var slider = document.querySelector("#slider");
var active = document.querySelector("#active");
var line1 = document.querySelector("#line1");
var line2 = document.querySelector("#line2");
var line3 = document.querySelector("#line3");
var line4 = document.querySelector("#line4");

line1.onclick = function(){
    slider.style. transform="translateX(0)";
    active.style.top='0';
}
line2.onclick = function(){
    slider.style.transform = "translateX(-25%)";
    active.style.top='80px';
}
line3.onclick = function(){
    slider.style.transform = "translateX(-50%)";
    active.style.top='160px';
}
line4.onclick = function(){
    slider.style.transform = "translateX(-75%)";
    active.style.top='240px';
}