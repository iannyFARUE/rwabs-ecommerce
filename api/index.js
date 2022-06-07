const express = require('express')
require('express-async-errors');
require('dotenv').config()

const productRoute = require("./routes/product")
const errorHandlerMiddleware = require('./middleware/error-handler');
const notFoundMiddleware = require('./middleware/not-found');


const app = express()


const connectDb = require('./db/connect')

const port = process.env.PORT || 5000
app.use(express.json());
app.use("/api/v1/products",productRoute)

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware)

const start = async () => {
    try{
        //connect to db
        await connectDb(process.env.MONGO_URI)

        app.listen(port,()=>console.log(`App started at localhost:${port}`))
    }catch(err){
        console.log(err)
    }
}


start()

