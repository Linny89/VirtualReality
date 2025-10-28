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

 
  for(let x = -10; x < 10; x += 2){
    for(let y = -10; y < 10; y += 2){
      let r = new Rocket(x, 1, z);
      flyer.push(r);
    }
  }
 
  loop();
  function loop(){
    flyer.a += flyer.da;
    flyer.setAttribute("rotation",{x:2, y:3, z:0});
    window.requestAnimationFrame(loop);
  }

  
})

