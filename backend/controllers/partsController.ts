import express, { NextFunction, Request, Response } from "express";
import logic from "../logic/logic";
import { idNotFound } from "../modal/client_error";

const partsRouter = express.Router();

partsRouter.get("/all", async (request:Request, response:Response, next:NextFunction) => {
    response.status(200).json(await logic.getAllParts());
})
export default partsRouter;
