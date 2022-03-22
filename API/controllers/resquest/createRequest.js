"use strict";

import Request from "../../models/Request.js";
import { createDefaultHistoric } from "../historic/createHistoric.js";

const createRequest = async (body) =>{
    try{
        const newRequest = await Request.create({
            name: body.name,
            contact: body.contact,
            date_time_loss: body.date_time_loss,
            latitude:  body.latitude,
            longitude: body.longitude,
            description: body.description
        });
        createDefaultHistoric(newRequest);
        return newRequest;
    }catch(err){
        console.log(err);
        return false;
    }
};

export {
    createRequest
};