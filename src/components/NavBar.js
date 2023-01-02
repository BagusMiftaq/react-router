import {ROUTES} from "../constants";

const menu = [
    {path: ROUTES.COURSE_LIST, text: "Course List"},
    {path: ROUTES.TYPE_LIST, text: "Type List"},
    {path: ROUTES.ADD_COURSE, text: "Add Course"},
    {path: ROUTES.ADD_TYPE, text: "Add Type"}
];

const NavBar = ({onNavigate}) => (
    <nav>
        {menu.map((item) => (
            <a
                href={"#"}
                style={{marginRight: 10}}
                onClick={() => onNavigate(item.path)}>
                {item.text}
            </a>
        ))}
    </nav>
)

export default NavBar;