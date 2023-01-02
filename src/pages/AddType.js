import {ROUTES} from "../constants";
import {useLocation, useNavigate} from "react-router-dom";

const AddType = () => {
    const onNavigate = useNavigate();
    const location = useLocation();
    return (
        <>
            <h3>
                Add Type Page
            </h3>
            <p>
                Params : {location?.state?.title}
            </p>
            <button onClick={()=>onNavigate(ROUTES.TYPE_LIST,{
                state : {
                    title : "from Add Type"
                }
            })}>
                Go to Type List
            </button>
        </>
    )

}

export default AddType;