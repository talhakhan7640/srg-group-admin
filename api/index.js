import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js"
dotenv.config();


const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/", userRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})