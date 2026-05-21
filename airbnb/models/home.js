// Core Modules
const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");
const Favourite = require("./favourite");
const db= require('../utils/dataBaseUtil');
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
    if(this.id) {
      return db.execute(
        "UPDATE homes SET houseName = ?, price = ?, location = ?, rating = ?, photoUrl = ?, description = ? WHERE id = ?",
        [this.houseName, this.price, this.location, this.rating, this.photoUrl, this.description, this.id]
      );
    }else {
    return db.execute(
      "INSERT INTO homes (houseName, price, location, rating, photoUrl, description) VALUES (?, ?, ?, ?, ?, ?)",
      [this.houseName, this.price, this.location, this.rating, this.photoUrl, this.description]
    ).then(result => {
      console.log("Home saved successfully with ID: ", result[0].insertId);
    }).catch(error => {
      console.log("Error while saving home: ", error);
    });
  }
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