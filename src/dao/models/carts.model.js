import mongoose from "mongoose";

const cartsSchema = new mongoose.Schema({
    cId:Number,
    products:{
        type: Array,
        default:[],
    },
});

const cartModel = mongoose.model("carts", cartsSchema);
export default cartModel;