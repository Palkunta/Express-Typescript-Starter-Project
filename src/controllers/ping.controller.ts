import { NextFunction, Request,Response } from "express";
import fs from 'fs/promises';
import {  Not_FOUND_error } from "../utils/errors/app.error";

export const pingHandler = async (req : Request , res : Response , next : NextFunction) => {

    
    try {
        await fs.readFile('sample');
        res.status(200).json({
            message: "pong Anu"                // not calling the express error handling middleware because we are handling the error here itself and sending the response to the client.
        });
    } catch (error) {
        throw new Not_FOUND_error("something went wrong");
    }
    
     
    

    // res.status(200).json({
    //     message: "pong",
    //     success : true
    // });
}
    

// res.json({...}) ==== res = function(res){ res.setJsonResponse({...}); return res; 
// res.status(200) ==== res = function(res){ res.setStatus(200); return res;}

//HOMEWORK --> read 'Builder design pattern' 