import dotenv from "dotenv" 
dotenv.config()
import mongoose from "mongoose"
import {DB_NAME} from "./constants.js";
import express from "express"
import connectDB from "./db/index.js"


connectDB()






/*const app=express()
function connectDB(){}

;(async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERROR :",error)
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`APP IS LISTENINIG ON port ${process.env.PORT}`)
        })
    }catch(error){
        console.error("ERROR : ",error)
        throw error
    }
    })()*/
