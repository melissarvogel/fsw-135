
const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

const express = require("express")


app.use(express.json())
app.use(morgan("dev"))



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

// POST

inventoryRouter.post("/", (req, res, next) => {
const newItem = new Item(req.body)
newItem.save((err, saveItem) => {
    if(err) {
        res.status(500)
        return next(err)
    }
    return res.status(201).send(saveItem)
    })
})


//DLETE

inventoryRouter.delete("/:itemName", (req, res) => {
    inventory.findOneAndDelete({ itemName: req.params.itemName}, (err, deletedItem) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send("Item Deleted.")
    })
})

//UPDATE

inventoryRouter.put("/:itemName", (req, res, next) =>{
    inventory.findOneAndUpdate(
        {itemName: req.params.itemName},
        req.body,
        {new: true},
        (err, updatedInventory) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedInventory)
        }

    )
})