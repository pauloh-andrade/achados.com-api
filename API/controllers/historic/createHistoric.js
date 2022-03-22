"use strict";

import Historic from "../../models/Historic.js";

const createDefaultHistoric = ({id_request}) =>{
    try{
        const newHistoric = Historic.create({
            status: "SOLICITADO",
            date_time: new Date(),
            description: "Item foi solicitado",
            id_request: id_request
        });
    }catch(err){
        console.log(err);
        return false;
    }
};

const createHistoric = async (body) =>{
    try{
        const newHistoric = await Historic.create({
            status: body.status,
            date_time: new Date(),
            description: body.description,
            id_request: body.id_request
        });
        return newHistoric;
    }catch(err){
        console.log(err);
        return false;
    }
};

export{ 
    createDefaultHistoric,
    createHistoric
};