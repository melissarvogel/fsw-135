const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

const express = require("express")
const inventoryRouter = express.Router()
const inventory = require("")

app.use(express.json())
app.use(morgan("dev"))

mongoose.connect("mongodb: C:\Users\melis\dev\bryan-university\fsw-135\week 1\inventory.js",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreatIndex: true,
    useFindAndModify: false
}, 
() => console.log("Connected to the DB")
)

app.use("/inventory", require("C:\Users\melis\dev\bryan-university\fsw-135\week 1\inventory.js"))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(9000, () => {
    console.log("This server is running on port 9000")
})

//GET 

inventoryRouter.get("/", (req, res, next)=> {
    inventory((err, inventory) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(inventory)
    })
})