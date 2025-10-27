class Flyer{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dx = 0.01;

    this.obj = document.createElement("a-entity");
    let shapes = ["a-cylinder","a-cone"];

     for(let i = -1; i <= 2; i++){
      let r = rnd(0,shapes.length);
      let Fly = document.createElement(shapes[r]);
       Fly.setAttribute("position",{x:i, y:0, z:0});
        Fly.setAttribute("color","green");
       Fly.setAttribute("height","2");
      this.obj.append( Fly );

     }
      this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
  launch(){
    this.y += this.dy;
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
  }
}