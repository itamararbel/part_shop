import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import partsModal from "../../modals/partsModal";
import "./parts.css";

function Parts(): JSX.Element {
    const [parts , setParts]= useState<partsModal[]>([]);
    useEffect (()=>{
        axios.get(" http://localhost:3001/api/parts/all")
        .then(response =>setParts(response.data));
    },[])

    const deletePart = (id:number|undefined) =>{

    }
    return (
        <motion.div className="parts"
        initial={{y: window.innerHeight}}
        animate={{y: 0, transition: {duration : 0.3}}}
        exit={{y:100, transition: {duration : 0.2}}}
        >
			<h2>parts in stack</h2><br></br>
            {parts.map((item)=><div className="box" key={item.id}><h6>{item.id}</h6><button onClick={(()=>deletePart(item.id))}>❌</button><h3>{item.part_name}</h3></div>)}

        </motion.div>
    );
}

export default Parts;
