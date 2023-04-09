import db from "../models/index";
require("dotenv").config();
import _ from "lodash";
import moment from "moment";
import { sendSimpleEmail } from "./emailService";
import { v4 as uuidv4 } from "uuid";

let buildUrlEmail = (doctorId) => {
  let result = "";

  let id = uuidv4();
  result = `${process.env.URL_REACT}/verify-booking?token=${id}&doctorId=${doctorId}`;
  return {
    result: result,
    token: id,
  };
};

export const postBookingAppinment = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.email) {
        resolve({
          errCode: 1,
          message: "Missing parameter",
        });
      } else {
        const token = buildUrlEmail(data.doctorId);
        await sendSimpleEmail(data, token.result);

        const [user, created] = await db.User.findOrCreate({
          where: { email: data.email },
          defaults: {
            email: data.email,
            roleId: "R3",
          },
        });

        if (user) {
          await db.Booking.findOrCreate({
            where: { patientId: user.id },
            defaults: {
              statusId: "S1",
              patientId: user.id,
              doctorId: data.doctorId,
              date: data.date,
              timeType: data.timeType,
              token: token.token,
            },
          });
        }

        resolve({
          errCode: 0,
          message: "OK",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

export const postVerifyBookAppoiment = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.token || !data.doctorId) {
        resolve({ errCode: 1, message: "Missing parameter!" });
      } else {
        let appoiment = await db.Booking.findOne({
          where: { token: data.token, doctorId: data.doctorId, statusId: "S1" },
          raw: false
        });

        if(appoiment) {
            appoiment.statusId = "S2";
            await appoiment.save();
            resolve({
                errCode: 0, 
                message: "Update Succes!"
            })
        } else {
            resolve({
                errCode: 2,
                message: "Appointment has been activated or does not exist"
            })
        }
      }
    } catch (e) {
      reject(e);
    }
  });
};
