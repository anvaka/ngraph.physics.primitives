var test = require('tap').test,
    primitives = require('..');

test('Body has properties force, pos and mass', function(t) {
  var body = new primitives.Body();
  t.ok(body.force, 'Force attribute is missing on body');
  t.ok(body.pos, 'Pos attribute is missing on body');
  t.ok(typeof body.mass === 'number' && body.mass !== 0, 'Body should have a mass');
  t.end();
});

test('Vector has x and y', function(t) {
  var vector = new primitives.Vector2d();
  t.ok(typeof vector.x === 'number', 'Vector has x coordinates');
  t.ok(typeof vector.y === 'number', 'Vector has y coordinates');
  t.end();
});
