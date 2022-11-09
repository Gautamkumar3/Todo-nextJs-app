import mongoose from "mongoose"

const Connect = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/todos")
        console.log("Database connected successfully")
    } catch (er) {
        console.log("Database not connected")
    }
}

export default Connect;