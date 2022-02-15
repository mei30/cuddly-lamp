const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let db;

const mongoConnect = (callback) => {
  MongoClient.connect("mongodb://127.0.0.1:27017/shop")
    .then((client) => {
      db = client.db();
      callback();
    })
    .catch((error) => {
      throw error;
    });
};

const getDb = () => {
  if (db) {
    return db;
  }

  throw 'No database found';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
