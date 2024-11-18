import express from "express";
import { products } from "./data.mjs";
import { getProductById } from "./data.mjs";
import { Product, dbConnect } from "./mongodb.mjs";

const app = express();
const port = 3000;

await dbConnect().then(() => console.log("connected to mongodb"));

//enable json parser
app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("hello from gwapo uziah");
});

//get all products
app.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json({ products });
});

//get single product
app.get("/products/:productId", async (req, res) => {
  const productId = req.params.productId;
  const result = await Product.findById(productId);

  res.json({ result });
});

//add product
app.post("/products", async (req, res) => {
  const newProduct = req.body;

  if (!newProduct.price) {
    return res.status(400).send("price is not defined");
  } else if (!newProduct.name) {
    return res.status(400).send("product name is not defined");
  }

  const product = new Product({
    name: newProduct.name,
    price: newProduct.price,
  });

  await product.save();

  res.json({ message: "product created successfully", product });
});

app.put("/products/:productId", async (req, res) => {
  const productId = req.params.productId;
  const body = req.body;

  const result = await Product.findByIdAndUpdate(productId, {
    name: body.name,
    price: body.price,
  });

  res.json({ Message: "product updated successfully", result });
});

app.delete("/products/:productId", async (req, res) => {
  const productId = req.params.productId;
  const result = await Product.findByIdAndDelete(productId);

  res.json({
    Message: "product deleted successfully",
    deletedProduct: result,
  });
});

app.listen(port, () => {
  console.log("server is running on " + port);
});
