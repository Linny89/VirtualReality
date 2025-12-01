let scene;


window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene")


      
  loop();
})
if(this.flag){
  this.r += this.DragEvent;
  this.Object.setAttribute("rotation", {x:5; y:this.DragEvent; z:-1});
  this.Object.Object3D.rotation.y=this.DragEvent;
  CaretPosition.y = this.y;

}
function loop(){

    
  window.requestAnimationFrame(loop);
}