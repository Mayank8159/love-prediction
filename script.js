var btn= document.getElementById("btn");
var value= document.getElementById("value");
var loveScore= Math.random() * 100;
loveScore= Math.floor(loveScore) + 1;

btn.addEventListener("click", function() {
    value.textContent= loveScore + "%";
});