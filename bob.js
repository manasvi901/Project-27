class Bob{
    constructor(x,y){
        var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
    var options={
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
}
World.add(world,this.body);
bobObject1 = ellipse(200, 550, 5, 5, 70);
bobObject2 = ellipse(300, 550, 5, 5, 70);
bobObject3 = ellipse(400, 550, 5, 5, 70);
bobObject4 = ellipse(500, 550, 5, 5, 70);
bobObject5 = ellipse(600, 550, 5, 5, 70);
}
display(){
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    super.display();
  }}