import { OkPacket } from "mysql"
import dal from "../dal/dal"
import CustomerModal from "../modal/customersModal"
import partsModal from "../modal/partsModal"
import {v4 as uuid} from "uuid"
import fs from "fs"
import path from "path"



const getAllCustomers = async():Promise<CustomerModal[]>=>{
const sql = `select customers.*, parts.part_name
from customers inner join parts on parts.id = customers.part_id`
let resp:CustomerModal[] = await dal.execute(sql);

return resp;
}

const getById = async(id:number):Promise<CustomerModal[]>=>{
    const sql = "select * from customers WHERE id ="+id;
    return await dal.execute(sql)
}

const addNewCustomer = async(newCustomer:CustomerModal,next):Promise<CustomerModal>=>{
    const extension = newCustomer.image?.name.split(".")[1]
    const imageName = uuid()+"."+ extension;
    newCustomer.image.name = imageName;

    const sql = `INSERT INTO part_shop.customers values (default, '${newCustomer.customer_name}','${newCustomer.customer_adress}', ${newCustomer.part_id}, '${newCustomer.customerPhone}','${newCustomer.image.name}') `
    let result :OkPacket; 
    try {
     result = await dal.execute(sql);
     newCustomer.image.mv("./uploadPics/"+imageName); 
    }catch(err){
           next(err)
    }
    newCustomer.id = result.insertId
    return newCustomer;
}

const deleteCustomer = async  (id:number):Promise<void>=>{
    const sql = "delete from customers where id="+id;
    return await dal.execute(sql);
}

const getAllParts = async ():Promise<partsModal[]>=> {
    const sql = "select * from parts";
    return await dal.execute(sql)
}


export default {
    getAllCustomers,
    getById,
    addNewCustomer,
    deleteCustomer,
    getAllParts,
   
}