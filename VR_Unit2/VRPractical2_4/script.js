let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 

  for(let i = 0; i < 2; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let flyer = new Flyer(x, 0 , z);
    flyer.scale(rnd(1,4));
  }

  loop();
})

