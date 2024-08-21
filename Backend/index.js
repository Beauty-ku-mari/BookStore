import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to mongoDB
try{
    mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
        });
        console.log("Connected to mongoDB");
} catch(error){
     console.log("Error: ",error)
}

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});