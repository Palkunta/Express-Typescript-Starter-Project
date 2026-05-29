// want to override the default error handler of express

import { NextFunction,Request,Response } from "express";
import { AppERROR } from "../utils/errors/app.error";

export const genericErrorHandler = (err : AppERROR , req : Request , res : Response , next : NextFunction) =>{
    
    console.log("Error is : ", err);
    res.status(err.statusCode).json({
        success : false ,
        message : err.message 
    });


}

