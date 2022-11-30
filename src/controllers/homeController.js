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
    console.log("🚀 ~ message", message)
    return res.send("Post CRUD");
}
