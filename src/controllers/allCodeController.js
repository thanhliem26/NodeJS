import * as AllcodeService from '../services/allCodeService';

export const getAllCodes = async (req, res) => {
    try {
        const type = req.query.type;
        const data = await AllcodeService.getAllcodeService(type);
        return res.status(200).json(data)
    } catch(e) {
        return res.status(200).json({
            errCode: -1,
            message: "Error from server!"
        })
    }
}