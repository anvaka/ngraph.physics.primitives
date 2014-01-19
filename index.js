module.exports = {
  Body: Body,
  Vector2d: Vector2d,
  Body3d: Body3d,
  Vector3d: Vector3d
};

function Body(x, y) {
  this.pos = new Vector2d(x, y);
  this.force = new Vector2d();
  this.velocity = new Vector2d();
  this.mass = 1;
}

function Vector2d(x, y) {
  this.x = typeof x === 'number' ? x : 0;
  this.y = typeof y === 'number' ? y : 0;
}

Vector2d.prototype.reset = function () {
  this.x = this.y = 0;
}

function Body3d(x, y, z) {
  this.pos = new Vector3d(x, y, z);
  this.force = new Vector3d();
  this.velocity = new Vector3d();
  this.mass = 1;
}

function Vector3d(x, y, z) {
  this.x = typeof x === 'number' ? x : 0;
  this.y = typeof y === 'number' ? y : 0;
  this.z = typeof z === 'number' ? z : 0;
}

Vector3d.prototype.reset = function () {
  this.x = this.y = this.z = 0;
}
