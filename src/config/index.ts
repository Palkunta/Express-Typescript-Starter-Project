// this file contains all the basic configuration logic for the app server, such as loading environment variables and setting up the server port

import dotenv from 'dotenv';


type ServerConfig = {
    PORT: number;
}
function loadEnv() {
    dotenv.config(); // this will load the environment variables from the .env file and make them available in process.env
    console.log(`Environment variables loaded successfully`);

}
loadEnv(); // this will load the environment variables from the .env file and make them available in process.env
//process.env.someVariable will be a string, so we need to convert it to a number before using it as the PORT
export const serverConfig :ServerConfig = {
    PORT: Number(process.env.PORT) || 3002 
};