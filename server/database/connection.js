const mongoose = require('mongoose');

const connectDb = async () =>{
    try {
        const con = await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log("MongoDB connected succefully !");
    } catch (error) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDb