let myCars = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < 100; i++) {
    myCars[i] = new Car(color(255,0,0), random(width), random(height), 1, random(360));
}
}

function draw() {
  background(255); 
  for (let j = 0; j < 100; j++) {
    myCars[j].drive();
    myCars[j].display();
    myCars[j].spin();
  }
}