import { Request,Response } from "express";

export const pingHandler = (req : Request , res : Response ) => {
    console.log("request body : ", req.body) ;// this will log the request body to the console. The request body is the data that is sent by the client in the request. This can be useful for debugging purposes, as it allows you to see what data is being sent by the client and how it is being processed by the server.
    console.log("request query parameters : ", req.query); // this will log the request query parameters to the console. The request query parameters are the key-value pairs that are sent by the client in the URL of the request. This can be useful for debugging purposes, as it allows you to see what data is being sent by the client and how it is being processed by the server.
    console.log("URL parameters : " , req.params);
    res.send("pong pong ping ping");   // terminal middleware , that's why not having next function as a parameter. This will send a response back to the client with the string "pong pong". The client can then use this response to verify that the server is working correctly and that the route is set up properly.
}