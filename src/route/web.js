import express from "express";
import * as HomaPage from '../controllers/homeController';
import * as UserController from '../controllers/userController';

let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', HomaPage.getHomePage);
    router.get('/crud', HomaPage.getCRUD);
    router.post('/post-crud', HomaPage.postCRUD);
    router.get('/get-crud', HomaPage.displayCRUD);
    router.get('/edit-crud', HomaPage.updateUser);
    router.post('/put-crud', HomaPage.putCRUD);
    router.get('/delete-user', HomaPage.deleteCRUD)
    
    //resful API
    router.post('/api/login', UserController.handleLogin);


    return app.use("/", router);
}

export default initWebRoute;