const mongoose = require('mongoose')

const mealSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
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