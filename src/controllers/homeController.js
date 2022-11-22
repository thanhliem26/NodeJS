import db from '../models/index';

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

