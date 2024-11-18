import mongoose from "mongoose";

const mongoURI = "mongodb://127.0.0.1:27017/pylonites";

export const dbConnect = async () => {
  await mongoose.connect(mongoURI);
};

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

export const Product = mongoose.model("Product", productSchema);
