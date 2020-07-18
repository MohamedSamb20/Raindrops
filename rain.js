/* global p5 */

// DO NOT EDIT THE FOLLOWING LINE
const p = new p5(() => {});

let drops, grass, height, width, grassBedHeight;

p.setup = function () {
  height = 500;
  width = 500;
  p.createCanvas(height, width);
  p.colorMode(p.HSB, 100);
  
  // Remember, the argument/parameter order is: x, y, d, fallSpeed
  drops = [];
  for(let i = 0; i < 70; i++){
    drops[i] = new RainDrop(p.random(width), p.random(height), p.random(5,15), p.random(5,10));
  }
  grassBedHeight = 40;
  grass = [];
  for(let i = 0; i < width; i++){
    grass[i] = new grassBlade(i, p.random(0,10), p.random(2,3));
  }
  
  // TODO: create another raindrop
}

p.draw = function () {
  p.background(5);
  p.noStroke();
  p.fill(30, 80, 80);
  p.rect(0, height-grassBedHeight, width, grassBedHeight);
  for(let i = 0; i < drops.length; i++){
  drops[i].drip();
  drops[i].show();
  }
  
  for(let i = 0; i < grass.length; i++){
    grass[i].showGrass();
  }
  
  // TODO: move and show Droplet2 and other drops you create!
}

class RainDrop {
  // The constructor will be called whenever you run `new RainDrop()`
  constructor(x, y, d, fallSpeed) {
    this.x = x; // x coordinate of raindrop
    this.y = y; // y coordinate of raindrop
    this.d = d; // diameter of the circle
    this.fallSpeed = fallSpeed;
  }

  show() {
    // TODO: draw your raindrop
    // hint: start with a circle
    p.noStroke();
    p.fill(60, 80, 80);
    p.ellipse(this.x, this.y, this.d);
  }
  
  drip() {
    // TODO: move your raindrop in this function instead and call it in draw()
    // why? code simplicity - if the action is the same for all raindrops, we
    // can keep the logic in this function
    this.y += this.fallSpeed;  // move raindrop down
    if (this.y > height) { // if we reach the end of the screen - reset to a new position
      this.y = 0;
      this.x = p.random(width);
    }
  }
}

class grassBlade{
  constructor(x, grassHeight, grassWidth){
    this.x = x;
    this.y = p.height-grassHeight-grassBedHeight;
    this.height = grassHeight;
    this.width = grassWidth;
  }
  showGrass(){
    p.noStroke();
    p.fill(30, 80, 80);
    p.rect(this.x, this.y, this.width, this.height);
  }
}
