class Boy {
    constructor(x,y,width,height) {
        var options={
            isStatic:true
        }

        this.image=loadImage("boy.png");

        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }

    display() {

        push();
        rectMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
    }
    
}