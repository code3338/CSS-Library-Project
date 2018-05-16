"use strict"

let icon = document.getElementById("icon");
let topNav = document.getElementById("topNav");
let iconDiv=document.getElementById("iconDiv");
let webpageTitle = document.getElementById("webpageTitle");
let toggleBtn = document.getElementById("toggleBtn");
let togglePara = document.getElementById("togglePara");
pageLoad();

toggleBtn.addEventListener("click", function() {
 if(togglePara.style.display=="block") {
   togglePara.style.display="none";
 }
 else if(togglePara.style.display=="none") {
   console.log('uytuyt');
   togglePara.style.display="block";
 }
});

function pageLoad() {
  if(window.innerWidth >= 768) {
     topNav.style.display = "flex";
  }
  else {
    topNav.style.display = "none"
  }
}
window.addEventListener("resize", function() {
  pageLoad();
})

icon.addEventListener("click",toggleFunc);

function toggleFunc() {
  if (topNav.style.display === "none") {
    topNav.style.display = "block";
    webpageTitle.style.display = "none";

  }
  else if(topNav.style.display === "block") {
    topNav.style.display = "none";
    webpageTitle.style.display = "block";
  }
  else if(topNav.style.display === "flex") {
    topNav.style.display = "flex";
    webpageTitle.style.display = "block";
  }
}
