import db from "../models/index";

export const createSpecialty =  (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if(!data.name || !data.image || !data.descriptionMarkDown || !data.descriptionHTML) {
                resolve({
                    errCode: 1,
                    message: "Missing parameter"
                })
            } else {
                await db.Specialty.create({
                    name: data.name,
                    image: data.image,
                    descriptionHTML: data.descriptionHTML,
                    descriptionMarkDown: data.descriptionMarkDown,
                })

                resolve({
                    errCode: 0,
                    message: "OK"
                })
            }
        } catch(e) {
            reject(e);
        }
    })
}

export const getAllSpecialty = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Specialty.findAll();

            if(data && data.length > 0) {
                data.map((item) => {
                    item.image = new Buffer(item.image, 'base64').toString('binary')
                    
                    return item;
                })
            }
            resolve({
                errCode: 0,
                message: "OK",
                data,
            })
        } catch(e) {
            reject(e)
        }
    })
}