"use strict";

import Historic from "../../models/Historic.js";

const findHistoric = (id) =>{
    try{
        const requests = Historic.findAll({
            where: {
                id_request: id                                                                                                                                                                                              
            }
        });
        return requests;
    }catch(err){
        console.log(err);
        return false;
    }
};

export {
    findHistoric
}