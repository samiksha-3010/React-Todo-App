import express   from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from 'cors'
import { alltodo, deleteYourTodo, getToDo, updateYourTodo } from "./controolers/ToDoControolers.js"

const app = express()
app.use(cors())
app.use(express.json())
dotenv.config();
app.get('/', (req, res) => {
    return res.send("Welcome to you.")
})
app.post("/get-todo",getToDo)
app.get("/all-todo",alltodo)
app.post("/update-Your-Todo",updateYourTodo)
app.post("/delete-Your-Todo",deleteYourTodo)



mongoose.connect(process.env.Mongo_URL).then(() =>{
    console.log("connected to DB..")
})

app.listen(8000, () =>{
    console.log("Listening on port 8000")
})
