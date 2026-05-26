const {getDb} = require('../utils/dataBaseUtil');

const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");
const Favourite = require("./favourite");
const e = require("express");

const homeDataPath = path.join(rootDir, "data", "homes.json");

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl,description,id) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
    this.description = description;
    this.id = id;
  }

  save() {
    const db = getDb();
    return db.collection("homes").insertOne(this);
}

  static fetchAll() {
    return db.execute("SELECT * FROM homes");
  }

  static findById(homeId) {
    return db.execute("SELECT * FROM homes WHERE id = ?", [homeId]);
  }

  static deleteById(homeId, callback) {
    db.execute("DELETE FROM homes WHERE id = ?", [homeId]);
  }
};