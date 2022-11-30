
import bcrypt from 'bcrypt';
import db from '../models/index';
const saltRounds = 10;

export const createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const hashPassword = await hashUserPassword(data.password);

            await db.User.create({
                email: data.email,
                password: hashPassword,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                gender: data.gender === "1" ? true : false,
                // image: data.image,
                phoneNumber: data.phoneNumber,
                roleId: data.roleId,
                // positionId: data.positionId,
            })
            
            resolve("create a new user succes!")
        } catch (e) {
            reject(e)
        }
    })
}

const hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            const hash = await bcrypt.hashSync(password, saltRounds);
            resolve(hash)
        } catch (e) {
            reject(e)
        }
    })
}