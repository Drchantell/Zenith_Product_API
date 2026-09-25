const test = require('node:test');
const assert = require('node:assert/strict');
const { validateMongoUri } = require('../config/connection');

test('accepts a real MongoDB Atlas URI', () => {
  const uri = 'mongodb+srv://appUser:MyP%40ssword123@cluster0.mongodb.net/zenithProducts?retryWrites=true&w=majority';

  assert.equal(validateMongoUri(uri), uri);
});

test('rejects placeholder MongoDB values', () => {
  assert.throws(
    () => validateMongoUri('PASTE_YOUR_MONGODB_ATLAS_CONNECTION_STRING_HERE'),
    /real MongoDB Atlas connection string/
  );

  assert.throws(
    () => validateMongoUri('mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER.mongodb.net/zenithProducts'),
    /real MongoDB Atlas connection string/
  );
});

test('rejects invalid connection string prefixes', () => {
  assert.throws(
    () => validateMongoUri('postgres://db.example.com/mydb'),
    /mongodb:\/\/ or mongodb\+srv:\/\//
  );
});
