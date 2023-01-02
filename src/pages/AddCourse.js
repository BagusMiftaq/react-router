import {ROUTES} from "../constants";
import {useNavigate} from "react-router-dom";

const AddCourse = () => {
    const onNavigate = useNavigate();
    return (
        <>
            <h3>
                Add Course Page
            </h3>
            <p>
                Params : contoh params
            </p>
            <button onClick={()=> onNavigate(ROUTES.COURSE_LIST)}>
                Go to Course List
            </button>
        </>
    )
}


export default AddCourse;