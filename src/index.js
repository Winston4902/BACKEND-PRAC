import dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose"
import {DB_NAME} from "./constants.js";
import connectDB from "./db/index.js"
import {app} from "./app.js"

connectDB()
.then(()=>{
    const port = process.env.PORT || 8000
    app.listen(port,()=>{
        console.log(`server is running at port : ${port}`)
    })
})
.catch((err)=>{
    console.log("MONGO DB CONNECTION ERROR : ",err)
    process.exit(1);
})

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
