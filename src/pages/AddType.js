import {ROUTES} from "../constants";

const AddType = ({onNavigate}) => (
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


export default AddType;