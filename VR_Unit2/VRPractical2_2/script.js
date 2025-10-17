let scene;
let box;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 
  box = document.querySelector("#pokemonball");
  box.a = 1;
  box.da = 2;
  
  loop();
})

function loop(){
  box.a += box.da;
  box.setAttribute("rotation",{x:1, y:box.a, z:0});
  window.requestAnimationFrame(loop);
}

let rnd = (l,u) => Math.floor(Math.random()*(u-l) + 2);


window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 
  box = document.querySelector("#rocket");
  box.a = 0;
  box.da = 2;
  
  loop();
})

function loop(){
  box.a += box.da;
  box.setAttribute("rotation",{x:2, y:box.a, z:0});
  window.requestAnimationFrame(loop);
}

