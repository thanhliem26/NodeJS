import express from "express";
import * as HomaPage from '../controllers/homeController';

let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', HomaPage.getHomePage)

    //resful API

    return app.use("/", router);
}

export default initWebRoute;