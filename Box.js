class Box {
    constructor(x, y, w, h) {
        var options = {
            isStatic : false,
            restitution : 0.8,
            friction : 1.0, 
            density : 0.4
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        this.x = x;
        this.y = y;

        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        rectMode(CENTER);
        translate(pos.x, pos.y);
        rotate(angle);
        rect(0,0,this.w,this.h);
        pop();
    }
}