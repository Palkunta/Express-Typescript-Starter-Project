import { Request,Response,NextFunction } from 'express';

import {v4 as uuidv4} from 'uuid';
import { asyncLocalStorage } from '../utils/helpers/req.helper';

export const attachCorrelationMiddleware = (req:Request,res:Response,next:NextFunction) =>{

    const correlationID = uuidv4();
    // we can set this correlation ID in the request header or we can set it in the response header or we can set it in the request object itself. It depends on how you want to use it. If you want to use it in the request object, then you can set it like this:
     
    
    req.headers['X-Correlation-ID'] = correlationID;

    asyncLocalStorage.run({correlationID : correlationID} , () => {
        next();
    })

    // next();



}