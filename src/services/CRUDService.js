
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

export const getAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allUser = await db.User.findAll({raw: true});
            resolve(allUser)
        } catch(e) {
            reject(e)
        }
    })
}

export const getUserById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await db.User.findOne({ where: {id: id}, raw: true})
           if(user) {
            resolve(user)
           } else {
            resolve([])
           }       
        } catch(e) {
            reject(e)
        }
    })
}

export const updateUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.User.update({firstName: data.firstName, lastName: data.lastName, address: data.address}, {where: {id: data.id}})
            resolve("edit succes")
        } catch(e) {
            reject(e)
        }
    })
}

export const deleteUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.User.destroy({where: {id :id}})
            resolve("delete succes!")
        } catch(e) {
            reject(e)
        }
    })
}