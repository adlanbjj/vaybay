const { MongoClient } = require("mongodb");
require('dotenv').config();

const dburl = process.env.DB_URL;
const dbname = process.env.DB_NAME;

let db;

async function connectToDb() {
  const client = new MongoClient(dburl);
  await client.connect();
  console.log('Подключение к MongoDB установлено');
  db = client.db(dbname);
}

function getDb() {
  if (!db) {
    throw new Error('Нет подключения к базе данных');
  }
  return db;
}

module.exports = { connectToDb, getDb };