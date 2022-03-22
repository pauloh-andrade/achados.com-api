"use strict";
import Express from "express";
import { findAllRequets, findRequestByPK } from "./controllers/resquest/listRequest.js"
import { createHistoric } from "./controllers/historic/createHistoric.js"
import { createRequest } from "./controllers/resquest/createRequest.js"
import { findHistoric } from "./controllers/historic/listHistoric.js";

const app = Express();

app.use(Express.json());

app.get("/request/:id", async (req, res)=>{
    const { id } = req.params;
    const resFind = await findRequestByPK(id); 
    if(resFind) return res.status(200).json(resFind);
    res.status(400).send("bad request");
});

app.get("/request", async (req, res)=>{
    const resFindAll = await findAllRequets(); 
    if(resFindAll) return res.status(200).json(resFindAll);
    res.status(400).send("bad request");
});

app.post("/request", async (req, res)=>{
    const resCreate = await createRequest(req.body);
    if(resCreate) return res.status(201).json(resCreate);
    res.status(400).send("bad request");
});

app.post("/historic", async (req, res)=>{
    const resCreate = await createHistoric(req.body);
    if(resCreate) return res.status(201).json(resCreate);
    res.status(400).send("bad request");
});

app.get("/historic/:id", async (req, res)=>{
    const { id } = req.params;
    const resFind = await findHistoric(id); 
    if(resFind) return res.status(200).json(resFind);
    res.status(400).send("bad request");
});

app.listen(3000, ()=>{
    console.log("server is running, url: http://localhost:3000");
});
