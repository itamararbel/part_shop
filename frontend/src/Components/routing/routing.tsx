import { Route, Routes,  } from "react-router-dom";
import AnimatedRoutes from "../animatedRoutes/animatedRoutes";
import Customers from "../customers/customers";
import NewOrder from "../newOrder/newOrder";
import Parts from "../parts/parts";

function Routing(): JSX.Element {
    return (
        <div className="routing">
              <AnimatedRoutes/>			
        </div>
    );
}

export default Routing;
