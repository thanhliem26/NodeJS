import * as specialtyService from '../services/specialtyService';

export const createSpecialty = async (req, res) => {
    try {
        const info = await specialtyService.createSpecialty(req.body);

        return res.status(200).json(info)
    } catch(e) {
        console.log("error", e);
        return res.status(200).json({
            errCode: -1,
            message: "Error from server ..."
        })
    }
}

export const getAllSpecialty = async (req, res) => {
    try {
        const info = await specialtyService.getAllSpecialty();

        return res.status(200).json(info)
    } catch(e) {
        console.log("error", e);
        return res.status(200).json({
            errCode: -1,
            message: "Error from server ..."
        })
    }
}