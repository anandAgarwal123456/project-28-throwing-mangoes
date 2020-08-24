class Mango {
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            restitution:0,
            density:1,
            friction:1
        }

        this.image=loadImage("mango.png");

        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body)
    }

    display() {
        push();
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
        fill("yellow");
        pop();
    }
}