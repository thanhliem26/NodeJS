import db from '../models/index';
import bcrypt from 'bcrypt';

export const handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            const userData = {};
            const isExist = await checkUserEmail(email);
            if(isExist) {
                const user = await db.User.findOne({
                    raw: true,
                    attributes: ["email", "roleId", "password"],
                    where: {email: email}
                })

                if(user) {
                    const check = await bcrypt.compareSync(password, user.password);
                    delete user.password
                    
                    if(check) {
                        userData.errCode = 0;
                        userData.message = 'Succes';
                        userData.user = user;
                    } else {
                        userData.errCode = 3;
                        userData.message = "Wrong password!";
                    }
                } else {
                    userData.errCode = 2;
                    userData.message = `User isn't exits!`
                }
                resolve(userData)
            } else {
                userData.errCode = 1;
                userData.message = `Your's email isn't exits in your system. Plz try other email!`
                resolve(userData);
            }
        } catch(e) {
            reject(e)
        }
    })
}

export const compareUserPasswrod = () => {
   return new Promise(async (resolve, reject) => {
        try {

        } catch(e) {
            reject(e)
        }
   })
}

export const checkUserEmail = (userEmail) => {
    return new Promise( async( resolve, reject) => {
        try {
            const user = await db.User.findOne({
                where: { email: userEmail}
            })
            if(user) {
                resolve(true)
            } else {
                resolve(false)
            }
        } catch(e) {
            reject(e)
        }
    })
}