import mongoose from "mongoose";

const connectMongo = async (URL) => {
    try {
        const options = {
            dbName : "schoolDB"
        }
       await mongoose.connect(URL, options)
       console.log("Connected Successfully");
    } catch (error) {
        console.log(error);
    }
}

export default connectMongo