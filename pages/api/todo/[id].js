import nc from "next-connect"
import Todo from "../../../server/modal/todo.modal"
import dbConnect from "../../../server/config/db"

const app = nc();
dbConnect();


app.get(async (req, res) => {
    let id = req.query.id;
    if (!id) {
      return   res.status(401).send("Id not found")
    }
    try {
        const todo = await Todo.findById(id)
        if (todo) {
           return res.status(200).send(todo)
        } else {
           return  res.status(403).send("No user found")
        }

    } catch (er) {
        return res.status(403).send({ msg: er.message })
    }
})

app.delete(async (req, res) => {
    const { id } = req.query;
    try {
        const todo = await Todo.findByIdAndDelete(id)
        res.status(200).send("Todo deleted successfully")
    } catch (er) {
        return res.status(403).send({ msg: er.message })
    }
})

app.put(async (req, res) => {
    const { id } = req.query;
    try {
        const todo = await Todo.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).send(todo)
    } catch (er) {
        return res.status(403).send({ msg: er.message })
    }
})






export default app;