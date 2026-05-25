import express, { Request,Response,NextFunction } from "express";
import { pingHandler } from "../controllers/ping.controller";


const pingrouter = express.Router();

// what express.Router() does is it creates a new router object that we can use to define our routes. We can then use this router object in our server.ts file to register the routes with the app object. This way we can keep our server.ts file clean and organized. We can also easily manage our routes by creating separate files for each route.

// instead of writing the route handlers in the server.ts file, we can create a separate file for each route and write the route handlers there. This way we can keep our server.ts file clean and organized. We can also easily manage our routes by creating separate files for each route.

//instead of using the app.get() , we can use the router.get() to define our routes. This way we can create a separate router for each route and then use the router in the server.ts file. This way we can keep our server.ts file clean and organized. We can also easily manage our routes by creating separate files for each route.
// the advantage of this approach is that we can easily manage our routes by creating separate files for each route. We can also keep our server.ts file clean and organized. This way we can easily find the route handlers for each route and make changes to them without having to search through the entire server.ts file.


function middleware1(req : Request , res : Response , next : NextFunction){
    console.log("middleware1");
    next(); // this will call the next middleware in the stack
}
function middleware2(req : Request , res : Response , next : NextFunction){
    console.log("middleware2");
    next(); // this will call the next middleware in the stack
}

// chaining multiple middleware functions can be done like this..
pingrouter.get("/ping", middleware1, middleware2, pingHandler); // this will define a route for the GET method on the /ping endpoint. When a request is made to this endpoint, the middleware1 and middleware2 functions will be called in order, and then the pingHandler function will be called to handle the request and send a response back to the client.

// middleware1 --> middleware2 --> pingHandler(ending middleware) --> response sent back to the client

export default pingrouter;

// what if we don't write next() in the middleware1....then the request will not be passed to the next middleware in the stack and the response will not be sent back to the client. This is because the middleware1 function will be stuck in an infinite loop and will never call the next middleware in the stack. Therefore, it is important to always call next() in your middleware functions to ensure that the request is passed to the next middleware in the stack and that a response is sent back to the client.
