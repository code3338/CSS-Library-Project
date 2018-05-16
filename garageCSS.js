"use strict"
let toggleBtn = document.getElementById("toggleBtn");
let togglePara = document.getElementById("togglePara");

toggleBtn.addEventListener("click", function() {
 if(togglePara.style.display=="block") {
   togglePara.style.display="none";
 }
 else if(togglePara.style.display=="none") {
   console.log('uytuyt');
   togglePara.style.display="block";
 }
});
