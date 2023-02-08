import db from '../models/index';

export const getAllcodeService = (typeInput) => {
    return new Promise(async (resolve, reject) => {
        try {
            if(!typeInput) {
                resolve({
                    errCode: 1,
                    message: "Missing required parameter!"
                })
            } else {
                const response = {};
                let allcode = await db.Allcode.findAll({
                    where: {type: typeInput}
                });
                response.errCode = 0;
                response.data = allcode;
                resolve(response)
            }
        } catch(e) {
            reject(e)
        }
    })
}