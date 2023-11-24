const express = require("express");
const mongoose = require("mongoose");
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


// Define a Todo schema
const todoSchema = new mongoose.Schema({
    task: String,
    completed: Boolean,
});
  
const Todo = mongoose.model('Todo', todoSchema);
  
// Routes
app.get('/todos', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
  

app.post('/todos', async (req, res) => {
    const { task, completed } = req.body;

    try {
        const newTodo = new Todo({ task, completed });
        await newTodo.save();
        res.json(newTodo);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.patch('/todos/:id', async (req, res) => {
    const { id } = req.params;
    const { completed } = req.body;
  
    try {
      const updatedTodo = await Todo.findByIdAndUpdate(id, { completed }, { new: true });
      res.json(updatedTodo);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
});