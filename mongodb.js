const express = require('express');
const app = express()
const body = require(`body-parser`);
const mongoose = require("mongoose");
let user = require("./models/userSchema.js");
const userSchema = require('./models/userSchema.js');

app.use(body.json())

let port = 9000
app.listen(port, () =>{
    console.log(`listening @ port ${port}`)
})

async function dbConnect(){
    console.log(`attempting db connection`)
    let dbConnected = await mongoose.connect("mongodb://localhost/users")
    !dbConnected ? console.log(`not connected`): console.log(`connected...`)
}


// user({name: "Jayadra", age: 36, location: `Louisiana`}).save()

app.get(`/`, async (req, res) =>{
    req = await user.find({})
    // console.log(req)
    req => req.json()
    res.send(req)
})

// console.log(user.find())


dbConnect()