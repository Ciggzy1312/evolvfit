const User = require("../models/user");

const createUser = async (req,res)=>{

    const { name, calorieRequirement } = req.body;

    if(!name){
        res.status(400).json({message: "Please add a name for the user"})
    }

    try {
        
        const user = await User.create({
            name,
            calorieRequirement
        })
    
        res.status(200).json(user)

    } catch (error) {
        res.status(400).json(error)
    }
}

const createUserMeal = async (req,res)=>{

    const { id } = req.params;

    try {
        
        const user = await User.findById(id);

        user.mealPlan.push(req.body);

        user.save();

        res.status(200).json(user)
    } catch (error) {
        res.status(400).json(error)
    }
}

const updateUser = async (req,res)=>{

    const { id } = req.params;
    const { name, calorieRequirement } = req.body;

    try {
        
        const user = await User.findByIdAndUpdate(id, {
            name,
            calorieRequirement
        })

        res.status(200).json(user)

    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = { createUser, createUserMeal, updateUser };