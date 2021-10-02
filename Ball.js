class Ball {
    constructor(x, y, w, h, angle) {
        var options = {
        density : 1,
        restitution : 0.8
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        World.add(world, this.body);

    }
    display() {
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(0,0,this.w, this.h);
        pop();
    }
}