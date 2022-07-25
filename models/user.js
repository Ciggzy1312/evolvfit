const mongoose = require('mongoose')

const mealPlanSchema = mongoose.Schema({
    date: {
        type: Date
    },
    meal: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Meal"
    }
})

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    calorieRequirement: {
      type: Number,
    },
    mealPlan: [{
        type: mealPlanSchema,
    }]
  }
)

module.exports = mongoose.model('User', userSchema)