import * as DoctorService from '../services/doctorService';

export const getTopDocTor = async (req, res) => {
    let limit = req.query.limit;
  
    if(!limit) limit = 10;

    try {
        const doctors = await DoctorService.getTopDoctorHome(limit);

        return res.status(200).json(doctors);
    } catch(e) {
        console.log("error", e);
        return res.status(200).json({
            errCode: -1,
            message: "Error from server ..."
        })
    }
}

export const getAllDortors = async (req, res) => {
    try {
        const doctors = await DoctorService.getAllDoctors();

        return res.status(200).json(doctors);
    } catch(e) {
        return res.status(200).json({
            errCode: -1,
            message: "Error from the server"
        })
    }
}

export const postInfoDoctor = async (req, res) => {
    try {
        const response = await DoctorService.saveDetailInfoDoctor(req.body);

        return res.status(200).json(response)
    } catch(e) {
        console.log("e",e)
        return res.status(200).json({
            errCode: -1,
            message: "Error from the server",
        })
    }
}

export const getDetailDoctorById = async (req, res) => {
    try {
        const infoDoctor = await DoctorService.getDetailDoctorById(req.query.id);

        return res.status(200).json(infoDoctor)
    } catch(e) {
        console.log("e", e);
        return res.status(200).json({
            errCode: -1,
            message: "Error from Server",
        })
    }
}

export const postBulkCreateSchedule = async (req, res) => {
    try {
        const schedule = await DoctorService.bulkCreateSchedule(req.body);

        return res.status(200).json(schedule);
    } catch(e) {
        console.log("e", e);
        return res.status(200).json({
            errCode: -1,
            message: "Error from Server",
        })
    }
}

export const getScheduleByDate = async (req, res) => {
    try {
        const schedules = await DoctorService.getScheduleByDate(req.query.doctorId, req.query.date);

        return res.status(200).json(schedules);
    } catch(e) {
        console.log("e", e);
        return res.status(200).json({
            errCode: -1,
            message: "Error from Server",
        })
    }
}

