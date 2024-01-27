import express from 'express';


const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    return res.send("Welcome to you.")
})




app.listen(8000, () => { console.log("Listening on port 8000.") })