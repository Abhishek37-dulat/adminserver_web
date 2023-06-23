const mongoose = require('mongoose');

const Connection = (MONGO_URL) =>{
    try{
        mongoose.connect(MONGO_URL);
        console.log("connected to MONGODB");
    }catch(err)
}