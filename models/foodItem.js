const mongoose = require('mongoose')

const foodItemSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        calories: {
            type: Number,
        },
        protein: {
            type: Number,
        },
        carb: {
            type: Number,
        },
        fat: {
            type: Number,
        },
        acceptedUnits: {
            type: String,
            enum: ["ml", "g", "liter", "kg", "item"]
        },
        itemWeight: {
            type: mongoose.Schema.Types.Decimal128,
        },
    }
)

module.exports = mongoose.model('FoodItem', foodItemSchema)