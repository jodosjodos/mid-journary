import express from "express"
import * as dotenv from "dotenv"
import {Configuration,OpenAIApi} from "openai"
import Post from "../mongodb/models/post.js"

dotenv.config()

const dalleRoutes =express.Router()

const configuration=new Configuration({
    apiKey:process.env.OPENAI_API_KEY
})

const openai=new OpenAIApi(configuration)

dalleRoutes.route("/").get((req,res)=>{
    res.send("dalle")
    console.log();
})

export default dalleRoutes