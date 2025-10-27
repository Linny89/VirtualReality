let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 

 
for(let x = -10; x < 10; x += 2){
    for(let z = -10; z < 10; z += 2){
      let r = new Rocket(x, 1, z);
      rockets.push(r);
    }
  }
 
  loop();
  function loop(){
  rocket.a += rocket.da;
  rocket.setAttribute("rotation",{x:2, y:rocket.a, z:0});
  window.requestAnimationFrame(loop);
}
})

