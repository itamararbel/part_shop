import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomerModal from "../../modals/customersModal";
import {motion} from "framer-motion"
import "./customers.css";

function Customers(): JSX.Element {
    const [customers, setCustomers] = useState<CustomerModal[]>([]);
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get(" http://localhost:3001/api/customers/all").then(response =>setCustomers(response.data))
        },[])
    
    function deleteOrder(id: number | undefined): void {
        axios.delete(" http://localhost:3001/api/customers/delete/"+id);
        setCustomers(customers.filter((item)=>item.id !== id))
    }

    return (
        <motion.div className="customers"
        initial={{y: window.innerHeight}}
        animate={{y: 0, transition: {duration : 0.3}}}
        exit={{y:100, transition: {duration : 0.2}}}
        >
            <br/>
         <h2>list of customers</h2> 
         <table>
            <thead>
                <tr>
                      <th>id</th>
                      <th>customer name</th>
                      <th>customer phone</th>
                      <th>customer adress</th>
                      <th>part name</th>
                      <th>delete</th>

                      <th>add file</th>
                </tr>
            </thead>
            <tbody>
                {customers.map((item)=><tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.customer_name}</td>
                    <td>{item.customerPhone}</td>
                    <td>{item.customer_adress}</td>
                    <td>{item.part_name}</td>
                    <td><button onClick={()=>deleteOrder(item.id)}>❌</button></td>
                    <td><img src={`http://localhost:3001/${item.imageName}`}/></td>
                </tr>)}
            </tbody>
         </table>
         <button onClick={()=>navigate("/add new")}>add customer</button>
        </motion.div>
    );
}

export default Customers;
