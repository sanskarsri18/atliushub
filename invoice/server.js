import express from "express";
import bodyParser from "body-parser";
import connectDB from "./database";

const app = express();
app.use(bodyParser.json());

connectDB();

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
