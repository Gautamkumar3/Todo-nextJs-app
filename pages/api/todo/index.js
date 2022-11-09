import nc from "next-connect"
import Todo from "../../../server/modal/todo.modal"
import dbConnect from "../../../server/config/db"


let app = nc();
dbConnect()


app.get(async (req, res) => {
    try {
        const todo = await Todo.find();
        res.status(200).send(todo)
    } catch (er) {
        res.status(403).send({ msg: er.message })
    }
})

app.post(async (req, res) => {
    try {
        const todo = new Todo(req.body);
        await todo.save()
        return res.status(200).send(todo)
    } catch (er) {
        return res.status(403).send({ msg: er.message })
    }
})







export default app;