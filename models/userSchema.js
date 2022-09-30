const mongoose = require("mongoose");

let userSchema = new mongoose.Schema(
    {name: String, age: Number, location: String}
    )

module.exports = mongoose.model("newUser", userSchema)