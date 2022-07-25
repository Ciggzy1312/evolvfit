const Meal = require("../models/meal")

const createMeal = async (req,res)=>{

    const { name, category, foodItems } = req.body;

    try {

        if(!name){
            res.status(400).json({message: "Please add a name for the meal"})
        }
    
        const meal = await Meal.create({
            name,
            category,
            foodItems
        });
    
        res.status(200).json(meal)

    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = { createMeal };