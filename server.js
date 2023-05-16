const express = require("express");

const PORT = 5500;

const app = express();
const productRoutes = require("./routes");
const mongoose = require("mongoose");
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://soogineer:qwer1234@cluster0.kxtder7.mongodb.net/test",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB Connected.."))
  .catch(err => console.log(err));

app.use("/api/products", productRoutes);
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT);
console.log(`Running on port ${PORT}`);

module.exports = app;
