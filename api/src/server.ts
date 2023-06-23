import "reflect-metadata"
import express, { request, response } from 'express'
import "./database"

const app = express();

app.get("/",(request,response)=>{ 
    return response.json({ message: "Cheguei nessa porra!"});
 })

app.post("/",(request, response) => { 
    return response.json({ message: "Cheguei nessa porra e salvei com sucesso caralho!"})
})
app.listen(3333, ()=> console.log("server is running..."))