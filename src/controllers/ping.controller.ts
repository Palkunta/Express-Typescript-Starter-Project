import { Request,Response } from "express";

export const pingHandler = (req : Request,res : Response) => {
    res.send("pong pong ping ping");   // terminal middleware , that's why not having next function as a parameter. This will send a response back to the client with the string "pong pong". The client can then use this response to verify that the server is working correctly and that the route is set up properly.
}