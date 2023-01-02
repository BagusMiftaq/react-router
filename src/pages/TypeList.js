import {ROUTES} from "../constants";
import {useNavigate} from "react-router-dom";

const TypeList = () => {
    const onNavigate = useNavigate();
    return (
        <>
            <h3>Type List Page</h3>
            <p>Params : contoh params</p>
            <button onClick={()=>onNavigate(ROUTES.COURSE_LIST)}>
                Go To Course List
            </button>
        </>
    )
}

export default TypeList;