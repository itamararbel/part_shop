import path from "path"
import express, { NextFunction, Request, Response } from "express";
import logic from "../logic/logic";
import { idNotFound } from "../modal/client_error";
import { UploadedFile } from "express-fileupload";

const customersRouter = express.Router();

customersRouter.get("/all", async (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json(await logic.getAllCustomers())
})

customersRouter.get("/image/:imageName",async (request: Request, response: Response, next: NextFunction) => {
    const imageName = request.params.imageName;
    const fullPath = path.join(__dirname,"..", "uploadPics", imageName);
    response.status(200).sendFile(fullPath);
 })
 
customersRouter.get("/byId/:id", async (request: Request, response: Response, next: NextFunction) => {
    const id = +request.params.id;
    const resp = await logic.getById(id);
    resp.length === 0 ? next(new idNotFound(id)) : response.status(200).json(resp);
}
)


customersRouter.delete("/delete/:id", async (request: Request, response: Response, next: NextFunction) => {
    const id = +request.params.id;
    response.status(204).json(await logic.deleteCustomer(id))
}
)

customersRouter.post("/add", async (request: Request, response: Response, next: NextFunction) => {
    const newCustomer = request.body;  
    newCustomer.image = request.files.image;
    console.log(newCustomer.image.name)
    response.status(201).json(logic.addNewCustomer(newCustomer,next));
}
)

export default customersRouter;
