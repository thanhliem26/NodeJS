import db from '../models/index';

export const getTopDoctorHome = (limit) => {
    console.log("🚀 ~ limit", limit)
    return new Promise(async (resolve, reject) => {
        try {
            const users = await db.User.findAll({
                limit: Number(limit),
                where: {roleId: "R2"},
                order: [["createdAt", "DESC"]],
                attributes: {
                    exclude: ["password"]
                },
                include: [
                    {model: db.Allcode, as: 'positionData', attributes: ['valueEn', 'valueVi']},
                    {model: db.Allcode, as: 'genderData', attributes: ['valueEn', 'valueVi']},
                ],
                raw: true,
                nest: true,
            })
            resolve({
                errCode: 0,
                data: users
            })
        } catch(e) {
            reject(e)
        }
    })
}