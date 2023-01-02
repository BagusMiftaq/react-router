import {ROUTES} from "../constants";
import {useNavigate} from "react-router-dom";

const AddType = () => {
    const onNavigate = useNavigate();
    return (
        <>
            <h3>
                Add Type Page
            </h3>
            <p>
                Params : contoh params
            </p>
            <button onClick={()=>onNavigate(ROUTES.TYPE_LIST)}>
                Go to Type List
            </button>
        </>
    )

}

export default AddType;