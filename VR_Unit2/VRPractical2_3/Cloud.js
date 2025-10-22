class cloud{
  constructor(x,y,z){
      this.obj = document.createElement("a-entity");
   let puff = document.createElement("a-spear");
    puff.setAttribute("color","Blue");
    puff.setAttribute("position","20 1.5 0");
    puff.setAttribute("height","23");
    this.obj.append( puff );

     let fluff = document.createElement("a-spear");
    fluff.setAttribute("position","23 3 0");
    fluff.setAttribute("color","gray");
    fluff.setAttribute("radius","0.25");
    this.obj.append( fluff );
  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
}
}