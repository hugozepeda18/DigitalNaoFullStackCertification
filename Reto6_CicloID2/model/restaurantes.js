import mongoose from "mongoose";

const restaurantesSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    restaurant_id: {
        required: true,
        type: Number
    },
    comments: {
        required: false,
        type: Array
    },
    grades: {
        required: false,
        type: Array
    },
    cuisine: {
        required: true,
        type: String
    },
    borough: {
        required: true,
        type: String
    },
    address: {
        required: true,
        type: Object
    }
},{
    versionKey: false 
})

export default mongoose.model('Restaurantes', restaurantesSchema, 'restaurantes')