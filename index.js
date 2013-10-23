module.exports = {
  Body: Body,
  Vector2d: Vector2d
  // that's it for now
};

function Body() {
  this.force = new Vector2d();
  this.pos = new Vector2d();
  this.mass = 1;
}

function Vector2d() {
  this.x = 0;
  this.y = 0;
}
