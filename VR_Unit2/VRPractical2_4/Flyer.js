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
      let fly = document.createElement(shapes[r]);
      fly.setAttribute("position",{x:i, y:3, z:0});
      fly.setAttribute("color","Gray");
      fly.setAttribute("height","2");
      this.obj.append( fly );
    }
      this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
  fly(){
    this.y += this.dy;
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
  }
}