import express from "express";
import { route } from "express/lib/application";
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
    router.get('/api/get-all-user', UserController.handleGetAllUser);
    router.post('/api/create-user', UserController.handleCreateUser);
    router.put('/api/edit-user', UserController.handleEditUser);
    router.delete('/api/delete-user', UserController.handleDeleteUser);

    return app.use("/", router);
}

export default initWebRoute;