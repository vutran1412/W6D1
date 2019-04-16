function MovingObject (object) {
  this.pos = object["pos"];
  this.vel = object["vel"];
  this.radius = object["radius"];
  this.color = object["color"];
}

MovingObject.prototype.draw = function(ctx) {
  document.addEventListener("DOMContentLoaded",function(){
    const canvasEl=document.getElementById("game-canvas");

    // canvasEl.width=500;
    // canvasEl.height=500;

    const ctx=canvasEl.getContext("2d");
    // ctx.fillStyle="black";
    // ctx.fillRect(0,0,500,500);
    ctx.beginPath();
    ctx.arc(100,100,20,0,2*Math.PI,true);
    ctx.strokeStyle="green";
    ctx.lineWidth=5;
    ctx.stroke();
    ctx.fillStyle="black";
    ctx.fill();
});
}
const mo = new MovingObject(
  { pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00"}
);

mo.draw();

MovingObject.prototype.move = function (){
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1]; 
}

mo.move();

// Dist([x_1, y_1], [x_2, y_2]) = sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2)

// Norm([x_1, y_1]) = Dist([0, 0], [x_1, y_1])

module.exports = MovingObject;