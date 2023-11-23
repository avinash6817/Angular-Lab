const express = require("express");
const path = require("path")
const app = express();

const PORT = 5000;

app.use(express.static(path.join(path.join(__dirname,'public'))));
app.use(express.urlencoded({extended : true}));

app.get('/feedback',(req,res) => {
    res.sendFile(path.join(__dirname,'views','index.html'));
})

app.post("/submit-feedback",(req,res) => {
    const {name ,feedback} = req.body;
    res.send(`Thank You , ${name} for your feedback, ${feedback}`);
})

app.listen(PORT, () => {
    console.log(`SERVER is running on port : ${PORT}`);
})
