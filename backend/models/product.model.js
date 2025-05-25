import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    requird: true
  },
  image:{
    type:String,
    requird: true
  },
}, {
    timestamps: true 
});


const Product = mongoose.model('Product', productSchema);




export default Product;