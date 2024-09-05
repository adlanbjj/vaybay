const { getDb } = require('../config/db');

async function createUser(username, password) {
  const db = getDb();
  const result = await db.collection('users').insertOne({ username, password });
  return result;
}

async function findUserByUsername(username) {
  const db = getDb();
  return db.collection('users').findOne({ username });
}

module.exports = { createUser, findUserByUsername };
