import {ROUTES} from "../constants";
import {useLocation, useNavigate, useParams, useSearchParams} from "react-router-dom";




const EditCourse = () => {
    const onNavigate = useNavigate();
    const location = useLocation();
    const params = useParams();
    const [search] = useSearchParams();

    return (
        <>
            <h3>
                Edit Course Page
            </h3>
            <p>
                Title : {search.get("title")}
            </p>
            <p>
                Desc :
            </p>
            <p>
                Path Variable : {params?.courseId}
            </p>
            <button onClick={()=> onNavigate(ROUTES.COURSE_LIST, {
                state : {
                    title : "from Edit Course"
                }
            })}>
                Go to Course List
            </button>
        </>
    )
}


export default EditCourse;