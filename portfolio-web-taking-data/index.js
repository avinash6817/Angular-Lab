const express = require("express");
const mongoose = require("mongoose");
const employeModel = require("./model/employe");
const cors = require("cors");

const app = express();
const PORT = 5000;

require("dotenv").config()

// middleware
app.use(express.json());
app.use(cors());


mongoose.connect(process.env.MONGODB_URL)
.then(() => {
    app.listen(PORT, () => {
        console.log(`SERVER RUNNING ON THE PORT : ${PORT}`)
    });
    console.log(`SUCCESSFULLY CONNECTED TO MONGODB DATABASE`)
})
.catch((err) => {
    console.log(err)
})


// Routing
app.post("/add-employe" ,async (req,res) => {
    try {
        const employe = req.body;
        const newEmploye = new employeModel(employe);
        await newEmploye.save();
    
        res.status(201).json({ message: 'New employe added successfully', employe : newEmploye });
    } 
    catch (err){
        console.error(err);
        res.status(500).json({ err : 'Internal server error' });
    }
})


app.get("/get-all-employe", async (req,res) => {
    try {
        const employes = await employeModel.find();
        res.status(200).json(employes);
    } 
    catch (err) {
        console.error(err);
        res.status(500).json({ err : 'Internal server error' });
    }
})


app.delete("/delete-employe/:id", async (req,res) => {
    try{
        const empId = req.params.id;
    
        const deletedEmploye = await employeModel.findByIdAndDelete(empId);
    
        if (!deletedEmploye) {
            return res.status(404).json({ error: 'blog not found' });
        }

        res.status(200).json({ message: 'employe deleted successfully', employe : deletedEmploye });
    }
    catch(err){
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
})


app.put('/update-employe/:id', async (req,res) => {
    try {
        const empId = req.params.id;
        const {name,age} = req.body;

        const updatedEmploye = await employeModel.findByIdAndUpdate(empId, {name,age})

        if (!updatedEmploye) {
            return res.status(404).json({ error: 'Blog not found' });
        }
      
        res.status(200).json({ message: 'Blog updated successfully', employe : updatedEmploye });
    } 
    catch (err) {
        console.error(err);
        res.status(500).json({ err : 'Internal server error' });
    }
})

