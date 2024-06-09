const mongoose = require ("mongoose");
const initdata = require ("./data.js");
const Listing = require("../models/listing.js");


const MONGO_URL = "mongodb://127.0.0.1:27017/traveller";
 main()
 .then(() =>{
    console.log("connected to DB");
 })
 .catch((err) => {
    console.log(err);
 });

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
   await Listing.deleteMany({});
   initdata.data.map((obj) => ({...obj, owner: "665deaf30c0324ff91bfbfad"}));
   await Listing.insertMany(initdata.data);
   console.log("data was intialized");
}

initDB();