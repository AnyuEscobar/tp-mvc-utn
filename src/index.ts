import connectDB from "./config/mongodb"
import express, { Request, Response } from "express"
import cors from "cors"
import { on } from "events"

const PORT = 2000

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req: Request, res: Response) => {
  res.json({ status: true })
})

//servidor en escucha
app.listen(PORT, () => {
  console.log(`Servidor en escucha en el puerto http://localhost:${PORT}`)
  connectDB
})