import "./animatedRoutes.css";
import { Route,  Routes,  useLocation } from "react-router-dom";
import Customers from "../customers/customers";
import NewOrder from "../newOrder/newOrder";
import Parts from "../parts/parts";
import {AnimatePresence} from "framer-motion"

function AnimatedRoutes(): JSX.Element {
    const location = useLocation();

    return (
        <div className="animatedRoutes">
            <AnimatePresence>
                        <Routes location={location} key={location.pathname}>

			  <Route path="/" element={<Customers/>}></Route>
              <Route path="/parts" element={<Parts/>}></Route>
              <Route path="/add New" element={<NewOrder/>}></Route>
              <Route path="/*" element={<Customers/>}></Route>
              </Routes>
              </AnimatePresence>
        </div>
    );
}

export default AnimatedRoutes;
