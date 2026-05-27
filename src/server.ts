// here ES module system is used so we have to use import instead of require
// then what about commonjs module system ? is it still supported in typescript ? yes it is supported but we have to use require instead of import.
//then which one should we use ? it depends on your project requirements and preferences. If you are working on a modern JavaScript project and want to take advantage of the latest features, you may want to use ES modules. However, if you are working on a legacy project or need to support older environments, you may want to use CommonJS modules. Ultimately, the choice is up to you and your team.

import express from 'express';
import {serverConfig} from './config';
// import { pingHandler } from './controllers/ping.controller';
// import pingrouter from './router/v1/ping.router';
import v1Router from './router/v1/index.router';
import v2Router from './router/v2/index.router';
import {z} from "zod";

//const PORT = 3000; //implicitly typed as number, because we assigned a number value to it. TypeScript can infer the type of a variable based on the value assigned to it. In this case, since we assigned the number 3000 to the constant PORT, TypeScript infers that PORT is of type number. Therefore, we don't need to explicitly declare the type of PORT as number, as it is already inferred by TypeScript.


const app = express();

//app.get("/ping",pingHandler); // kind of like routing work

//passing your app object here and there is not a good idea, because it can lead to tight coupling between your modules and make it difficult to test and maintain your code. Instead, you can use a router to define your routes and then use the router in your server.ts file. This way, you can keep your server.ts file clean and organized, and you can easily manage your routes by creating separate files for each route.

app.use(express.json()); // this will parse the incoming request body and make it available in the req.body property. This is useful for handling POST requests where the client sends data in the request body. By using express.json(), we can easily access the data sent by the client and use it in our route handlers.
app.use(express.text());
// app.use(express.urlencoded({extended:true})); // this will parse the incoming request body and make it available in the req.body property. This is useful for handling POST requests where the client sends data in the request body. By using express.urlencoded(), we can easily access the data sent by the client and use it in our route handlers. The extended option allows us to choose between parsing the URL-encoded data with the querystring library (when false) or the qs library (when true). The qs library allows for parsing nested objects, which can be useful for handling complex data structures in the request body.

/**
 * Registering all the routers and their corresponding routes with the app object in the server.ts file is a good practice because it allows you to keep your server.ts file clean and organized. It also allows you to easily manage your routes by creating separate files for each route. This way, you can easily find the route handlers for each route and make changes to them without having to search through the entire server.ts file.
 * Additionally, it allows you to easily test your route handlers by importing the router in your test files and testing the route handlers in isolation. This can help you catch bugs and ensure that your route handlers are working correctly before deploying your application.
 */
app.use("/api/v1", v1Router); // this will use the pingrouter for all the routes defined in the pingrouter. This way, we can keep our server.ts file clean and organized. We can also easily manage our routes by creating separate files for each route.

app.use('/api/v2',v2Router);
// any middleware that you register using app.use()....will be applicable to all the requests


//api versioning is a technique used to manage changes to an API over time. It allows developers to make changes to the API without breaking existing clients that rely on the old version of the API. By using versioning, developers can introduce new features, fix bugs, and make other changes to the API without affecting existing clients. This is typically done by including the version number in the URL of the API endpoints, such as /api/v1/ping or /api/v2/ping. This way, clients can specify which version of the API they want to use, and developers can maintain multiple versions of the API simultaneously.

app.listen(serverConfig.PORT, () => {
    console.log(`Server is running on port ${serverConfig.PORT}...`);
    console.log(`Press Ctrl+C to stop the server`);

    const obj = {
        name : "Kuntal",
        age : 25
    }//incoming obj that I want to test

    const objSchema = z.object({
        name : z.string(),
        age : z.number().int().positive()
    });// Expectation

    console.log(objSchema.parse(obj));
});

// what app.use() does ?
// app.use() is a method provided by Express.js that allows you to register middleware functions with the app object. Middleware functions are functions that have access to the request and response objects, and can modify them or perform other operations before passing control to the next middleware function in the chain. In this case, we are using app.use() to register the pingrouter as a middleware function, which will handle all requests that match the routes defined in the pingrouter.