class Snowflake{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = 0.1;
    this.obj = document.createElement("a-sphere");
    this.obj.setAttribute("radius",0.2);
    this.obj.setAttribute("opacity",0.65);
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append( this.obj );
  }

  fall(){
    this.y -= this.dy;
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z})
    if(this.y < -12){
      this.y = rnd(11,720);
    }
     if(this.x < -12){
      this.y = rnd(11,720);
    }
  }
}