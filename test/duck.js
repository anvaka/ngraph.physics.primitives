var test = require('tap').test,
    primitives = require('..');

test('Body has properties force, pos and mass', function(t) {
  var body = new primitives.Body();
  t.ok(body.force, 'Force attribute is missing on body');
  t.ok(body.pos, 'Pos attribute is missing on body');
  t.ok(body.velocity, 'Velocity attribute is missing on body');
  t.ok(typeof body.mass === 'number' && body.mass !== 0, 'Body should have a mass');
  t.end();
});

test('Vector has x and y', function(t) {
  var vector = new primitives.Vector2d();
  t.ok(typeof vector.x === 'number', 'Vector has x coordinates');
  t.ok(typeof vector.y === 'number', 'Vector has y coordinates');

  var initialized = new primitives.Vector2d(1, 2);
  t.equal(initialized.x, 1, 'Vector initialized imporperly');
  t.equal(initialized.y, 2, 'Vector initialized imporperly');

  var badInput = new primitives.Vector2d('hello world');
  t.equal(badInput.x, 0, 'Vector should be resilient to bed input');
  t.equal(badInput.y, 0, 'Vector should be resilient to bed input');
  t.end();
});
