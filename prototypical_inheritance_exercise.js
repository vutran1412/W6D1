function Surrogate() {};          

Function.prototype.inherits = function(SuperClass) {

  this.prototype = Object.create(SuperClass.prototype);
  // Surrogate.prototype = SuperClass.prototype;
  // this.prototype = new Surrogate();
  // this.prototype.constructor = this;
}

function MovingObject () {
  this.speed = 0;
}

MovingObject.prototype.move = function(speed) {
  this.speed += speed
  console.log(this.speed);
}

function Ship () {
  MovingObject.call(this);
}
Ship.inherits(MovingObject);

function Asteroid () {
  MovingObject.call(this);
}
Asteroid.inherits(MovingObject);

let ship = new Ship();
let asteroid = new Asteroid();

ship.move(4);
asteroid.move(6);
ship.move(7);
asteroid.move(8);