class Stone{
    constructor(x,y,width,height) {
        var options={
            isStatic:true,
            restitution:0,
            friction:1,
            density:1.2
        }

        this.image=loadImage("stone.png");

        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }

    display() {
        push();
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
    }
}