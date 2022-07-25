const User = require("../models/user");

const createUser = async (req,res)=>{

    const { name, calorieRequirement, mealPlan } = req.body;

    if(!name){
        res.status(400).json({message: "Please add a name for the user"})
    }

    try {
        
        const user = await User.create({
            name,
            calorieRequirement,
            mealPlan
        })
    
        res.status(200).json(user)

    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = { createUser };