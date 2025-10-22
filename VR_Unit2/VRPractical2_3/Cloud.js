class Cloud{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
    let spear1 = document.createElement("a-sphere");
    spear1.setAttribute("color","white");
    spear1.setAttribute("position","20 1.5 0");
    spear1.setAttribute("height","23");
    this.obj.append( spear1 );

    let spear2 = document.createElement("a-sphere");
    spear2.setAttribute("position","23 3 0");
    spear2.setAttribute("color","white");
    spear2.setAttribute("radius","0.25");
    this.obj.append( spear2 );
  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
}
}