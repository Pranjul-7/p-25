class Paper
{
    constructor(x,y)
    {
        var options = 
        {
            restitution : 0.3, density : 1.2 , friction : 0.5 , isStatic: false
        }
        this.body=Bodies.circle(x,y,13,options);
        World.add(world,this.body);
        
        this.image=loadImage("paper.png");

    }
    display()
    {
        var pos = this.body.position;
        push ();
        translate (pos.x,pos.y);
        rotate (this.body.angle);
        imageMode(CENTER);   
        image(this.image,0,0,40,40);
        pop ();
    }
}