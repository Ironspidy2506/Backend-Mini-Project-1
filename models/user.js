const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://priyanshusahu:Ironspidy%4025@cluster0.s2hoq.mongodb.net/mongopractice`);

const userSchema = mongoose.Schema({
    username: String,
    name: String,
    age: Number,
    email: String,
    password: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'post'
        }
    ]
})

module.exports = mongoose.model("user", userSchema);
