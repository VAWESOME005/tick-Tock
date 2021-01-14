class Clock {
    constructor(x,y,width,height) {
      this.body = this.image
        this.image = loadImage("clock.png");
        
      }
      display(){
        push();
        imageMode(CENTER);
        image(this.image, 0, 0, 493,493);
        pop();
      }
    };
  