const { getDb } = require('../utils/dataBaseUtil');
module.exports = class Favourite {
  constructor(houseId) {
    this.houseId = houseId;
  }

  save() {
    const db = getDb();
    return db.collection("favourites").findOne({ houseId: this.houseId }).then(existingFav => {
      if (existingFav) {  
        return Promise.resolve();
    return db.collection("favourites").insertOne(this);
  }
})
}

  static getFavourites() {
    const db=getDb();
    return db.collection("favourites").find().toArray();
  }

  static deleteById(delHomeId) {
    const db=getDb();
    return db.collection("favourites").deleteOne({ houseId: delHomeId });
  }
};