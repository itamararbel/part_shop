import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CustomerModal from "../../modals/customersModal";
import partsModal from "../../modals/partsModal";
import "./newOrder.css";

function NewOrder(): JSX.Element {
    const [file, setFile] = useState("");
    const [parts, setParts] = useState<partsModal[]>([]);
    const { register, handleSubmit } = useForm<CustomerModal>();
    const navigate = useNavigate()

    const send = (newCustomer: CustomerModal) => {
        newCustomer.image = file;
        console.log(newCustomer);
        axios.post("http://localhost:3001/api/customers/add", newCustomer, {
            headers: {
                "content-type": "multipart/form-data"
            }
        }).then(() => navigate("/")
        )
    }

    const handleFile = (e: any) => {
        e.preventDefault();
        setFile(e.target.files[0])
    }

    useEffect(() => {
        axios.get(" http://localhost:3001/api/parts/all")
            .then(response => setParts(response.data));
    }, [])
    return (
        <motion.div className="newOrder"
            initial={{ y: window.innerHeight }}
            animate={{ y: 0, transition: { duration: 0.3 } }}
            exit={{ y: 100, transition: { duration: 0.2 } }}
        >
            <h2>add a new customer</h2>
            <form onSubmit={handleSubmit(send)}>
                <input type="text" placeholder="plz enter customer name" {...register("customer_name")} />
                <input type="text" placeholder="plz enter customer phone" {...register("customerPhone")} />
                <input type="text" placeholder="plz enter customer address" {...register("customer_adress")} />
                <select {...register("part_id")} defaultValue={"plz peak product"}>
                    <option disabled>plz peak product</option>
                    {parts.map((item) => <option key={item.id} value={item.id}>{item.part_name}</option>)}
                </select>
                <input type="file" onChange={handleFile} name="sampleFile" /> 
                <button>submit</button>
            </form>
        </motion.div>
    );
}

export default NewOrder;
