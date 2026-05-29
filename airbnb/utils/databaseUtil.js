const mongo= require('mongodb');
const MongoClient = mongo.MongoClient;
const MONGO_URL = "";

let _db;
const mongoConnect=(callback)=>{
    MongoClient.connect(MONGO_URL).then((client)=>{
        //console.log(client);
        _db = client.db('airbnb');
        callback();
    }).catch((err)=>{
        console.log("Error connecting to MongoDB", err);
    });
}
const getDb=()=>{
    if(_db){
        return _db;
    }
    throw new Error("No database found!");
};

exports.mongoConnect=mongoConnect;
exports.getDb = getDb;