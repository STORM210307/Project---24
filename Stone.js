class Stone{
	constructor(x,y,width,height)
	{
		var options = {
        restitution: 8.8,
        friction: 0.9,
		density:12
		}
	// assign options to the rubber ball
		this.body = Bodies.rectangle(x, y, width, height, options)
        this.width = 90;
        this.height = 30;
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("grey");
			//draw the ellipse here to display the rubber ball
            rect(0, 0, this.width, this.height);
			pop()
    }
}