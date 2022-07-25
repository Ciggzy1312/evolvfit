const FoodItem = require("../models/foodItem")

const createFoodItem = async (req,res)=>{

    const { name, calories, protein, carb, fat, acceptedUnits, itemWeight } = req.body;

    if(!name){
        res.status(400).json({message: "Please add a name for the food item"})
    }

    try {

        const item = await FoodItem.create({
            name,
            calories,
            protein,
            carb,
            fat,
            acceptedUnits,
            itemWeight
        });
    
        res.status(200).json(item)
        
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = { createFoodItem };