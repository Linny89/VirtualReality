class House{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
    let box1 = document.createElement("a-box");
    box1.setAttribute("color","brown");
    box1.setAttribute("position","20 1.5 0");
    box1.setAttribute("height","23");
    this.obj.append( box1 );

    let box2 = document.createElement("a-box");
    box2.setAttribute("position","23 3 0");
    box2.setAttribute("color","brown");
    box2.setAttribute("radius","0.25");
    this.obj.append( box2 );
  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
}