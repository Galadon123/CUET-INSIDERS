const mongoose=require("mongoose");

const MONGO_URI = "mongodb+srv://fazlul:MykFJB4Prx4Bo105@cluster0.t5eienn.mongodb.net/Cluster0?retryWrites=true&w=majority";

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(process.env.MONGO_URI) 
        console.log('Mongo connected')
    } catch(error) {
        console.log(error)
        process.exit()
    }
}

module.exports = connectDB;