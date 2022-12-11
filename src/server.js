import express from "express";
import bodyParser from "body-parser";
import viewEngine from './config/viewEngine';
import initWebRoute from "./route/web";
import connectDB from './config/connectDB';
import cors from 'cors';
require('dotenv').config();

const app = express();
const corsOptions = {
    origin: process.env.REACT_APP_FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));

const PORT = process.env.PORT || 2612;

//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


viewEngine(app);
initWebRoute(app);

connectDB()

app.listen(PORT, () => {
    console.log("NodeJs is running on the port: ", PORT)
});