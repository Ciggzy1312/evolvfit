const mongoose = require('mongoose')

const mealSchema = mongoose.Schema(
  {
    name: {
      type: String
    },
    category: {
      type: String,
      enum: ["Breakfast", "Lunch", "Evening Snack", "Dinner"]
    },
    foodItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "FoodItem"
    }]
  }
)

module.exports = mongoose.model('Meal', mealSchema)