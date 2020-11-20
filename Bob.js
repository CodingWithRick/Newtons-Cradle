class Bob {
    constructor(x, y) {
        var options = {
            'restitution': 0.8,
            'friction': 1.0,
            'density': 1.0,
        }
        this.body = Bodies.circle(x, y, 25, options);
        this.radius = 50;
        World.add(world, this.body);
    }
    display() {
        push();
        ellipseMode(CENTER);
        fill("#ff00ee");
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
        pop();
    }
}