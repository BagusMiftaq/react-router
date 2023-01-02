import {ROUTES} from "../constants";
import {useLocation, useNavigate} from "react-router-dom";

const AddCourse = () => {
    const onNavigate = useNavigate();
    const location = useLocation();
    return (
        <>
            <h3>
                Add Course Page
            </h3>
            <p>
                Params : {location?.state?.title}
            </p>
            <button onClick={()=> onNavigate(ROUTES.COURSE_LIST, {
                state : {
                    title : "from Add Course"
                }
            })}>
                Go to Course List
            </button>
        </>
    )
}


export default AddCourse;