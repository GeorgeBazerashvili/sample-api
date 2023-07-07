const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const arr = [
  { name: "iPhone 12", price: 999 },
  { name: "Samsung Galaxy S21", price: 799 },
  { name: "Google Pixel 5", price: 699 },
  { name: "OnePlus 9 Pro", price: 899 },
  { name: "Xiaomi Mi 11", price: 749 },
  { name: "Huawei P40 Pro", price: 899 },
  { name: "Sony Xperia 1 III", price: 1099 },
  { name: "LG Wing", price: 999 },
  { name: "Oppo Find X3 Pro", price: 1099 },
  { name: "Motorola Edge Plus", price: 999 },
  { name: "Samsung Galaxy A21", price: 1125 },
  { name: "Nokia++", price: 400 },
  { name: "Huawei P21", price: 730 },
  { name: "Google Pixel 7A", price: 1200 },
  { name: "Iphone 14 Pro Max", price: 1500 },
  { name: "Motorola P17", price: 955 },
  { name: "Realme C11", price: 640 },
  // Add more smartphone objects as needed
];

app.get("/", (req, res) => {
  res.status(200).json(arr);
});

app.listen(3000, () => {
  console.log("app is listening on port 3000");
});
