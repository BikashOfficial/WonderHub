const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../model/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderHub";

main()
    .then(() => {
        console.log("CONNECTED TO DB...");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect(MONGO_URL);
};

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({
        ...obj,
        owner: "66daf4033e14256b4d3c07b3"
    }));
    await Listing.insertMany(initData.data);
    console.log("data was initialized...");
}

initDB();