"use strict";

import Request from "../../models/Request.js";

const findAllRequets = () =>{
    try{
        const requests = Request.findAll();
        return requests;
    }catch(err){
        console.log(err);
        return false;
    }
};

const findRequestByPK = (id) =>{
    try{
        const request = Request.findByPk(id);
        return request;
    }catch(err){
        console.log(err);
        return false
    }
};

export {
    findRequestByPK,
    findAllRequets
}