import db from '../models/index';
import * as CRUDService from '../services/CRUDService';

export const getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        console.log("data", data)
        return res.render("homepage.ejs", {
            data: JSON.stringify(data)
        })
    } catch(e) {
        console.log("err", e)
    }
}

export const getCRUD = async (req, res) => {
    return res.render("crud.ejs");
}

export const postCRUD = async (req, res) => {
    const message = await CRUDService.createNewUser(req.body)
    return res.send("Post CRUD");
}

export const displayCRUD = async (req, res) => {
    const allUser = await CRUDService.getAllUser();
 
    return res.render("displayCRUD.ejs", {
        dataUser: allUser
    })
}

export const updateUser = async (req, res) => {
    const userId = req.query.id;
    if(userId) {
        const userData = await CRUDService.getUserById(userId);
        return res.render("updateUser.ejs", {user: userData})
    } else {
        return res.send("hello from edit page!")
    }
}

export const putCRUD = async (req, res) => {
    const data = req.body;
    const messageEdit = await CRUDService.updateUser(data);
    const allUser = await CRUDService.getAllUser();
    console.log("🚀 ~ messageEdit", messageEdit)

    return res.render("displayCRUD.ejs", {
        dataUser: allUser
    })
}

export const deleteCRUD = async (req, res) => {
    const userId = req.query.id;

    if(userId) {
        const messageDelte = await CRUDService.deleteUser(userId);
        const allUser = await CRUDService.getAllUser();
        
        return res.render("displayCRUD.ejs", {
            dataUser: allUser
        })
    } else {
        return res.send("hello from delete user!")
    }
}