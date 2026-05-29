import { NextFunction,Request,Response } from "express";
// import {  ZodObject } from "zod";
import { ZodSchema } from "zod";
/**
 * 
 * @param schema - zod schema to validate the request body
 * 
 * @returns - MiddleWare fn to validate the request body
 */
export const validateRequestBody = (schema : ZodSchema) => { // on the go , take any req body schema , and create a middleware to validate that
    return async (req : Request , res : Response , next : NextFunction) : Promise<void>=> {
        try{
            await schema.parseAsync(req.body);
            console.log("Request Body is valid..");
            next();
        }
        catch(err){
            // if the validation fails , then this catch block will be executed
            // res.status(400); // equiv to --> res = function (res) =>{ res.setStatus(400); return res; }
            res.status(400).json({
                //can pass javascript obj & that will be serialized to json
                message : "Invalid request body",
                success : false,
                error: err
            });
        }
    }
}

// same type of fn can be created to validate url params

export const validateQueryParams = (schema : ZodSchema) => { // on the go , take any req body schema , and create a middleware to validate that
    return async (req : Request , res : Response , next : NextFunction):Promise<void> => {
        try{
            await schema.parseAsync(req.query);
            console.log("Query Params is valid..");
            next();
        }
        catch(err){
            // if the validation fails , then this catch block will be executed
            // res.status(400); // equiv to --> res = function (res) =>{ res.setStatus(400); return res; }
            res.status(400).json({
                //can pass javascript obj & that will be serialized to json
                message : "Invalid Query Params",
                success : false,
                error: err
            });
        }
    }
}