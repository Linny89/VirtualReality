let scene;
let box;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 
  poke = document.querySelector("#pokemonball");
  poke.a = 1;
  poke.da = 2;
  
  loop();
})

function loop(){
  poke.a += poke.da;
  poke.setAttribute("rotation",{x:1, y:poke.a, z:0});
  window.requestAnimationFrame(loop);
}




window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 
  rocket = document.querySelector("#car");
  rocket.a = 0;
  rocket.da = 2;
  
  loop();
})

function loop(){
  rocket.a += rocket.da;
  rocket.setAttribute("rotation",{x:2, y:rocket.a, z:0});
  window.requestAnimationFrame(loop);
}


