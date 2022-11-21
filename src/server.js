import express from "express";
import bodyParser from "body-parser";
import viewEngine from './config/viewEngine';
import initWebRoute from "./route/web";
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 2612;

//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoute(app);

app.listen(PORT, () => {
    console.log("NodeJs is running on the port: ", PORT)
});