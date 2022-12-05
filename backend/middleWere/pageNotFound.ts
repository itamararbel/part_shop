import express, { NextFunction, Request, Response }  from 'express';
import { routeNotFound } from '../modal/client_error';



const pageNotFound = ((request:Request, response:Response,next:NextFunction)=>{
    console.log("404");
    const err = new routeNotFound(request.originalUrl);
    next(err)
})

export default pageNotFound;