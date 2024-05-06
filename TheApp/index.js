import express   from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from 'cors'

import { alltodo, deleteYourTodo, getToDo, updateYourTodo } from "./controolers/ToDoControolers.js";
import { getCurrentUser, login, register } from "./controolers/UserControolers.js";

const app = express()
app.use(cors())
app.use(express.json())
dotenv.config();


app.get('/', (req, res) => {
    return res.send("Welcome to you.")
})


app.post('/register', register );
app.post('/login', login );
app.post('/getcurrentuser ', getCurrentUser );

app.post("/get-todo", getToDo);
app.post("/alltodo ", alltodo );
app.patch("/updateYourTodo ", updateYourTodo );
app.delete("/ deleteYourTodo ",  deleteYourTodo );


mongoose.connect(process.env.Mongo_URL).then(() =>{
    console.log("connected to DB..")
})

app.listen(8000, () =>{
    console.log("Listening on port 8000")
})
