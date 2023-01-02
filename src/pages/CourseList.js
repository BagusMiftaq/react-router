import {ROUTES} from "../constants";
import {useLocation, useNavigate} from "react-router-dom";

const CourseList = () => {
    const onNavigate = useNavigate();
    const location = useLocation();
    return (
        <>
            <h3>Course List Page</h3>
            <p>Params : contoh {location?.state?.title}</p>
            <button onClick={()=>onNavigate(ROUTES.ADD_COURSE, {
                state : {
                    title : "from Course List"
                }
            })}>
                Go To Add Course
            </button>
            <br/>
            <button onClick={()=>onNavigate(ROUTES.ADD_TYPE, {
                state : {
                    title : "from Course List"
                }
            })}>
                Go To Add Type
            </button>
            <br/>
            <button onClick={()=>onNavigate(ROUTES.TYPE_LIST, {
                state : {
                    title : "from Course List"
                }
            })}>
                Go To Type List
            </button>
            <br/>

            <button onClick={()=>onNavigate(`${ROUTES.EDIT_COURSE}/ini-dari-course-list`, {
                state : {
                    title : "from Course List"
                }
            })}>
                Go To Edit Course
            </button>

        </>
    )
}

export default CourseList;