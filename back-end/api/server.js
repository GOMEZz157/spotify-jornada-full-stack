import express from "express";
import { db } from "./connect.js";
import cors from "cors"

const app = express();
const PORT = 3001;

app.use(cors())

app.get('/', (request,response) => {
     response.send(``)
})
app.get('/artists', async (request,response) => {
    response.send(await db.collection('artists').find({}).toArray());
})
app.get('/songs', async (request,response) => {
    response.send(await db.collection('songs').find({}).toArray());
})

app.listen(PORT, () => {
    console.log(`Servidor escutando na porta ${PORT}`)
})