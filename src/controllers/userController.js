import * as UserService from '../services/userService';

export const handleLogin= async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if(!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: "Missing inputs paramater"
        })
    }

    const userData = await UserService.handleUserLogin(email, password);

    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.message,
        user: userData.user ? userData.user : {}
    })
}

export const handleGetAllUser = async (req, res) => {
    const id = req.query.id;
    console.log("id", id)
    const users = await UserService.getAllUser(id);

    return res.status(200).json({
        errCode: 0,
        message: "Succes!",
        users: users,
    })
}