import express from "express";
import * as HomaPage from '../controllers/homeController';

let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', HomaPage.getHomePage);
    router.get('/crud', HomaPage.getCRUD)
    router.post('/post-crud', HomaPage.postCRUD)
    //resful API

    return app.use("/", router);
}

export default initWebRoute;