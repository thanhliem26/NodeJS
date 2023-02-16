import db from '../models/index';
import bcrypt from 'bcrypt';
const saltRounds = 10;

export const handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            const userData = {};
            const isExist = await checkUserEmail(email);
            if(isExist) {
                const user = await db.User.findOne({
                    raw: true,
                    attributes: ["email", "roleId", "password", "firstName", "lastName", "id"],
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

export const getAllUser = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = null;
            if(userId === "ALL") {
                users = await db.User.findAll();
            } else {
                users = await db.User.findOne({
                    where: {id : userId}
                })
            }

            resolve(users)
        } catch(e) {
            reject(e)
        }
    })
}

export const createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const check = await checkUserEmail(data.email);
            if(check) {
                resolve({
                    errCode: 1,
                    message: "Your email is already in used, Plz try another email!"
                })
            }
            const hashPassword = await hashUserPassword(data.password);

            await db.User.create({
                email: data.email,
                password: hashPassword,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                gender: data.gender,
                phoneNumber: data.phoneNumber,
                roleId: data.roleId,
                positionId: data.positionId,
                image: data.image,
            })
            
            resolve({
                errCode: 0,
                message: "Succes!",
            })
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

export const deleteUser = (id) => {
    return new Promise( async (resolve, reject) => {
        try {
            const user = await db.User.findOne({where: {id : id}});
            if(user) {
                console.log("test")
                await db.User.destroy({where: {id :id}});
                resolve({errCode: 0, message: "Succes!"})
            }
            resolve({errCode: 1, message: "User not exits!"})
        } catch(e) {
            reject(e)
        }
    })
}

export const updateUserData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await db.User.findOne({where: {id: data.id}});
            if(user) {
                await db.User.update({
                    firstName: data.firstName,
                    lastName: data.lastName,
                    address: data.address,
                    gender: data.gender,
                    phoneNumber: data.phoneNumber,
                    roleId: data.roleId,
                    positionId: data.positionId,
                    image: data.image,
                }, {where: {id: data.id}})
               resolve({
                errCode: 0,
                message: "Succes!"
               })
            }
            resolve({
                errCode: 1,
                message: "User not found!"
            })
        } catch(e) {
            reject(e)
        }
    })
}

