// const express = require("express");
require("dotenv").config()
const mongoose = require("mongoose")
const fs = require("fs")

// const app = express();

// app.listen(3333, ()=>{
//     console.log("Server running")
// })


const dataSchema = new mongoose.Schema({
    end_year: Number || String,
    intensity: Number || String,
    sector: String,
    topic: String,
    insight: String,
    url: String,
    region: String,
    start_year: String || Number,
    impact: String,
    added: String,
    published: String,
    country: String,
    relevance: Number,
    pestle: String,
    source: String,
    title: String,
    likelihood: Number
})

const dataModel = new mongoose.model("Data", dataSchema)


const openAndReadFile = async () => {
    return new Promise((resolve, rejects) => {
        fs.readFile("./data/jsondata.json", "utf8", (error, data) => {
            if (error) {
                console.log(error)
                return;
            }
            const dataObjs = JSON.parse(data)
            resolve(dataObjs)
        })
    })

}

const pushDataToMongo = async () => {

    const data = await openAndReadFile()

    try {
        await mongoose.connect(process.env.MONGO_DB)
    }
    catch (err) {
        console.log(err)
    }

    console.log(data.length)

    for (let k = 0; k < data.length; k++) {
        let dataObj = new dataModel(data[k]);
        await dataObj.save()
    }
    console.log("finished")

}

pushDataToMongo()