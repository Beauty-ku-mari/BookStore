import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";

const app = express();

app.use(cors());

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

// defining  routes
app.use("/book", bookRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

// http://localhost:4001/book