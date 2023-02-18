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