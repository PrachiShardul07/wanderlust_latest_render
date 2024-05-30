const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
       type: String,
       required: true,
    },
    description: String,
    image: {
       type: String,
       default:
         "https://unsplash.com/photos/an-aerial-view-of-a-sandy-beach-and-a-body-of-water--o-cJHQf4Gg",
       set: (v) =>
          v  === ""
        ? "https://unsplash.com/photos/an-aerial-view-of-a-sandy-beach-and-a-body-of-water--o-cJHQf4Gg" 
        : v,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;