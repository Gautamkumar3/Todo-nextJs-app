import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    status: { type: Boolean, required: true, default: false },
    description: { type: String }
})

const Todo = mongoose.models.todo || mongoose.model("todo", todoSchema);

export default Todo;