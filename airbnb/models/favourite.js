//const { getDb } = require('../utils/dataBaseUtil');

const  mongoose  = require("mongoose");
// module.exports = class Favourite {
//   constructor(houseId) {
//     this.houseId = houseId;
//   }

//   save() {
//     const db = getDb();
//     return db.collection("favourites").findOne({ houseId: this.houseId }).then(existingFav => {
//       if (existingFav) {  
//         return Promise.resolve();
//     return db.collection("favourites").insertOne(this);
//   }
// })
// }

//   static getFavourites() {
//     const db=getDb();
//     return db.collection("favourites").find().toArray();
//   }

//   static deleteById(delHomeId) {
//     const db=getDb();
//     return db.collection("favourites").deleteOne({ houseId: delHomeId });
//   }
// };

const favouriteSchema = mongoose.Schema({
  houseId: {
    type: mongoose.Schema.Types.ObjectId,
      ref: "Home",
    required: true,
    unique: true 
  },
});
module.exports = mongoose.model("Favourite", favouriteSchema);