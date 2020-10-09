const mongoose = require("mongoose")
const Schema = mongoose.Schema

//Inventory Schema

const inventorySchema = new Schema({
    itemName: {
        type: String,
        required: true},
    cost: {
        type: Number,
        required: true},
    function: {
        type: String,
        required: true},
    assembled: {
        type: Boolean,
        required: true}
})

module.exports = mongoose.model("Inventory", inventorySchema)