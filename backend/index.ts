import cors from "cors";
import express from "express";
import config from "./config";
import pageNotFound from "./middleWere/pageNotFound";
import sqlInit from "./util/init_sql";
import { catchAll } from './middleWere/catchAll';
import customersRouter from "./controllers/controller";
import partsRouter from "./controllers/partsController";
import fileUpload from "express-fileupload";



const server = express();
sqlInit();
server.use(cors());
server.use(fileUpload({
    createParentPath:true
}));
server.use(express.json())
server.use(express.static('./uploadPics'))
server.use("/api/customers", customersRouter);
server.use("/api/parts" , partsRouter)
server.use("*",pageNotFound);
server.use(catchAll)
server.listen(config.port, ()=>{console.log("listening on port"+ config.port)})
