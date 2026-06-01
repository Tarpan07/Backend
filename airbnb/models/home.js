//const {getDb} = require('../utils/dataBaseUtil');

const { Mongoose } = require("mongoose");


// const fs = require("fs");
// const path = require("path");
// const rootDir = require("../utils/pathUtil");
// const Favourite = require("./favourite");
// const e = require("express");
// const { ObjectId } = require('mongodb');

// const homeDataPath = path.join(rootDir, "data", "homes.json");

// module.exports = class Home {
//   constructor(houseName, price, location, rating, photoUrl,description,_id) {
//     this.houseName = houseName;
//     this.price = price;
//     this.location = location;
//     this.rating = rating;
//     this.photoUrl = photoUrl;
//     this.description = description;
//     if(_id) {
//       this._id = _id;
//     }
//   }

//   save() {
//     const db = getDb();
//     if(this._id){
//       const updateFields = {
//         houseName: this.houseName,
//         price: this.price,
//         location: this.location,
//         rating: this.rating,
//         photoUrl: this.photoUrl,
//         description: this.description
//       };
//       return db.collection("homes").updateOne({_id: new ObjectId(String(this._id))}, {$set: updateFields});
//     }else{
//     return db.collection("homes").insertOne(this);
//     }
// }

//   static find() {
//     const db=getDb();
//     return db.collection("homes").find().toArray();
//   }

//   static findById(homeId) {
//     const db = getDb();
//     return db.collection("homes").find({ _id: new ObjectId(String(homeId)) }).next();
//   }

//   static deleteById(homeId) {
//     const db = getDb();
//     return db.collection("homes").deleteOne({ _id: new ObjectId(String(homeId)) });
//   }
// };

// Mongoose//
const mongoose = require("mongoose");
const favourite = require("./favourite");
const homeSchema = mongoose.Schema({
  houseName: { type: String, required: true },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  rating: { type: Number, required: true },
  photoUrl: String,
  description: String,
});
homeSchema.pre('findOneAndDelete', async function(next) {
  const homeId = this.getQuery()["_id"];
  await Favourite.deleteMany({ houseId: homeId });
  next();
});

module.exports = mongoose.model("Home", homeSchema);
