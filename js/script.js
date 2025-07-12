function togglemenu(){
    const nav=document.getElementById("navlink");
    nav.classList.toggle("show");
}

// loading screen
window.addEventListener("load",function(){
    this.setTimeout(function(){
         const loader= document.getElementById("loading-screen");
   const main = document.getElementById("main-contant");
   loader.classList.add("hidden");
   main.style.opacity="1";
    },2500);
  
});


