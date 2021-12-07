class Paper{
    constructor(x, y, width, height, angle) {
        var options = {
             isStatic:true,
            restitution:0.3,
            friction:0,
            density:1.2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.x = x;
        this.y = y;
        this.w = width;
        this.h = height;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 200, 400, this.width, this.height);
        pop();
      }
}