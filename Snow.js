class Snow {
    constructor(){
    var options={
        'restitution':0.8,
        'friction':1.0,
        'density':1.0,
        'isStatic':false
    }
     this.body=Bodies.rectangle(random(50,750),random(10,100),100,100,options);
     this.image=loadImage("snowflakes_PNG7585.png");
     this.snowImage=loadImage("snow4.webp");
     this.width=100;
     this.height=100;
     //console.log(this.body.position)
     World.add(world,this.body);
    }

    display(){
     var number=Math.round(random(1,2));
     var angle = this.body.angle;
    push();
    //translate(this.body.position.x, this.body.position.y);
   // rotate(angle);
     imageMode(CENTER);
     rectMode(CENTER)
    // image(this.image, mouseX, mouseY, 300,300);
     if(number === 1){
       // fill("red")
      // rect(200,300,50,50);
      // image(this.image, random(50,750),random(10,100), 100,100);
      image(this.image,this.body.position.x,this.body.position.y, 100,100);
       // console.log(image);
       
     }
     else{
         ///fill('green')
       // rect(0,0,50,50);
       // image(this.snowImage,random(50,750),random(10,100), 100,100);
       image(this.snowImage,this.body.position.x,this.body.position.y, 100,100);
    }
    pop();
    // console.log(number);
    }
}