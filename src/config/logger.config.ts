import winston from 'winston';
import { get_correlationID } from '../utils/helpers/req.helper';
import DailyRotateFile from 'winston-daily-rotate-file';

const logger = winston.createLogger({
    format : winston.format.combine(
        winston.format.timestamp({ format: "MM-DD-YYYY HH-mm-ss" }),
        winston.format.json(),
        // define a custom print
        winston.format.printf( ({ timestamp, level , message , ...data}) =>{
            
            const output = { 
                level , 
                message ,
                timestamp, 
                correlationid : get_correlationID() , 
                data
            };
            
            return JSON.stringify(output);
        })
    ),
    transports: [//array
        new winston.transports.Console(),
        new DailyRotateFile({
            filename : "logs/%DATE%-app.log",
            datePattern :"YYYY-MM-DD",
            maxSize: "20m",
            maxFiles: "14d",
        })
        //TODO : Add logic to integrate and save logs in MONGODB
    ]
});


export default logger;