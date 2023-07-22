import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    }
},{
    versionKey: false 
})

export default mongoose.model('Users', usersSchema, 'users')