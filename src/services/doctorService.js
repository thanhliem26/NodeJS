import db from '../models/index';
require('dotenv').config();
import _ from 'lodash';
import moment from 'moment';

const MAX_NUMBER_SCHEDULE = process.env.MAX_NUMBER_SCHEDULE;

export const getTopDoctorHome = (limit) => {
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

export const getAllDoctors = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const doctors = await db.User.findAll({
                where: {roleId: "R2"},
                attributes: {
                    exclude: ["password", "image"]
                },
            })

            resolve({
                errCode: 0,
                data: doctors
            })
        } catch(e) {
            reject(e)
        }
    })
}

export const saveDetailInfoDoctor = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if(!data.id || !data.contentHTML || !data.contentMarkdown) {
                resolve({
                    errCode: 1,
                    message: "Missing parameter"
                })
            } else {
                if(data.isEdit) {
                    await db.Markdown.update({
                        contentHTML: data.contentHTML,
                        contentMarkdown: data.contentMarkdown,
                        description: data.description,
                        doctorId: data.id,
                        updateAt: new Date(),
                    }, {where: {doctorId: data.id}})

                    resolve({
                        errCode: 0,
                        message: "Edit success"
                    })
                } else {
                    await db.Markdown.create({
                        contentHTML: data.contentHTML,
                        contentMarkdown: data.contentMarkdown,
                        description: data.description,
                        doctorId: data.id,
                    })
    
                    resolve({
                        errCode: 0,
                        message: "save info doctor succes"
                    })
                }
                
            }
        } catch(e) {
            reject(e)
        }
    })
}

export const getDetailDoctorById = (idDoctor) => {
    return new Promise(async (resolve, reject) => {
        try {
            if(!idDoctor) {
                resolve({
                    errCode: 1,
                    message: "Missing parameter!"
                })
            } else {
                const infoDoctor = await db.User.findOne({
                    where: {id: idDoctor},
                    attributes: {
                        exclude: ["password"]
                    },
                    include: [
                        {model: db.Markdown, attributes: ['contentHTML', 'contentMarkdown', 'description']},
                        {model: db.Allcode, as: 'positionData', attributes: ['valueEn', 'valueVi']},
                    ],
                    raw: true,
                    nest: true,
                })

                resolve({
                    errCode: 0,
                    data: infoDoctor,
                })
            } 
        } catch(e) {
            reject(e);
        }
    })
}

export const bulkCreateSchedule = (params) => {
    return new Promise(async (resolve, reject) => {
        try {
            if(!params) {
                resolve({
                    errCode: 1,
                    errMessage: "Missing required param!",
                })
            } else {
                if(params && params.length > 0) {
                    const data = params.map((item) => {
                        const result = {
                            ...item,
                            maxNumber: Number(MAX_NUMBER_SCHEDULE),
                            timeType: item.time,
                        }
                        delete result.time;

                        return result;
                    })

                    let exitsing = await db.Schedule.findAll({
                        where: {doctorId: data[0].doctorId, date: data[0].date},
                        attributes: ['timeType', 'date', 'doctorId', 'maxNumber']
                    })

                    exitsing = exitsing.map((item) => {
                        return {
                            ...item,
                            date: moment(item.date).format("YYYY-MM-DD HH:mm:ss")
                        }
                    })

                    const toCreate = _.differenceWith(data, exitsing, (a, b) => { 
                        return a?.timeType === b?.timeType && a?.date === b?.date;
                    })

                    if(toCreate && toCreate.length > 0) {
                        await db.Schedule.bulkCreate(data)
                    }
                    
                    resolve({
                        errCode: 0,
                        message: "Ok"
                    })
                }
            }
            resolve(true)
        } catch(e) {
            reject(e)
        }
    })
}

export const getScheduleByDate = (doctorId, date) => {
    return new Promise(async (resolve, reject) => {
        try {
            if(!doctorId || !date) {
                resolve({
                    errCode: 1,
                    message: 'Missing parameter'
                })
            }
            const data = await db.Schedule.findAll({
                where: {doctorId: doctorId, date: date}
            })

            resolve({
                errCode: 0,
                data: data
            })
        } catch(e) {
            reject(e);
        }
    })
}