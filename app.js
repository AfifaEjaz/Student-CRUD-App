import express, { Router, urlencoded } from "express"
import { join } from 'path'
import mongoose from "mongoose"
import connectMongo from "./db/connectiondb.js"
import router from "./student/router.js"
const app = express()
const port = 3000

const URL = process.env.URL || "mongodb://localhost:27017";

connectMongo(URL)

app.use(urlencoded({ extended: false }))

//Incase of static files
// app.use(express.static(join(process.cwd(), "public")))

app.use("/", router)

app.set("view engine", "ejs")

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})