import * as PatientService from '../services/PatientService';

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

export const postBookingAppointment = async (req, res) => {
    try {
        const info = await PatientService.postBookingAppinment(req.body);

        return res.status(200).json(info)
    } catch(e) {
        console.log("error", e);
        return res.status(200).json({
            errCode: -1,
            message: "Error from server ..."
        })
    }
}

export const postVerifyBookingAppointment = async (req, res) => {
    try {
        let info = await PatientService.postVerifyBookAppoiment(req.body);

        return res.status(200).json(info)
    } catch(e) {
        console.log("error", e);
        return res.status(200).json({
            errCode: -1,
            message: "Error from server ..."
        })
    }
}

