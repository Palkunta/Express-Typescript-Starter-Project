import { NextFunction, Request,Response } from "express";
import logger from "../config/logger.config";

export const pingHandler = async (req : Request , res : Response , next : NextFunction) => {
    logger.info("Ping request received...",{ correlationId : req.headers['X-Correlation-ID']});
     res.status(200).json({message : "pong"});
}
 

// res.json({...}) ==== res = function(res){ res.setJsonResponse({...}); return res; 
// res.status(200) ==== res = function(res){ res.setStatus(200); return res;}

//HOMEWORK --> read 'Builder design pattern' 



// A correlation ID is a unique identifier attached to a request and included in all logs generated during that request's lifecycle. It helps trace, debug, and monitor a request across multiple components or microservices by allowing related log entries to be grouped together.

//step 1 : have some unique ID generator function 
//step 2 : put the generated ID in the current request context .
