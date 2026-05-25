import express from 'express';
import pingrouter from './ping.router';

const v1Router = express.Router();

v1Router.use('/ping',pingrouter);


export default v1Router;