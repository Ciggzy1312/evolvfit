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


const optimizedMeal = async (req,res)=>{

    const { calories } = req.body;

    try {
        
        const item = await FoodItem.find().where('calories').gt(calories-100).lt(calories+100)
                                        .where('protein').gt((calories*20)/100).lt((calories*30)/100)

        if(item.length>=1 && item.length<5){
            res.status(200).json(item)
        } else{
            res.status(200).json({message: "No items found for this criteria"})
        }

    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = { createFoodItem, optimizedMeal };