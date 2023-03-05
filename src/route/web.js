import express from "express";
import { route } from "express/lib/application";
import * as HomaPage from '../controllers/homeController';
import * as UserController from '../controllers/userController';
import * as AllcodeController from '../controllers/allCodeController';
import * as DoctorController from '../controllers/doctorController';

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

    //handle table users
    router.post('/api/login', UserController.handleLogin);
    router.get('/api/get-all-user', UserController.handleGetAllUser);
    router.post('/api/create-user', UserController.handleCreateUser);
    router.put('/api/edit-user', UserController.handleEditUser);
    router.delete('/api/delete-user', UserController.handleDeleteUser);

    //handle table allcodes
    router.get('/api/allcodes', AllcodeController.getAllCodes);
    router.get('/api/top-doctor-home', DoctorController.getTopDocTor);
    router.get('/api/get-all-doctors', DoctorController.getAllDortors);
    router.post('/api/save-info-doctor', DoctorController.postInfoDoctor);
    router.post('/api/bulk-create-schedule', DoctorController.postBulkCreateSchedule)

    //markdown
    router.get('/api/get-detail-doctor-by-id', DoctorController.getDetailDoctorById);
    router.get('/api/get-schedule-by-date', DoctorController.getScheduleByDate);
    //

    return app.use("/", router);
}

export default initWebRoute;