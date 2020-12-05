class Ground{
    constructor(x,y,w,h){
        var g_options = {
            isStatic: true
          }
          this.body = Bodies.rectangle(200,380,400,20,g_options);
          World.add(world,this.body);
    }

    display(){
        var gos = this.body.position;
        fill("green");
        rectMode(CENTER);
        rect(gos.x,gos.y,400,20);

    }
}