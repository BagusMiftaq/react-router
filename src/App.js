import './App.css';
import React from "react";
import {ROUTES} from "./constants";
import AddCourse from "./pages/AddCourse";
import AddType from "./pages/AddType";
import TypeList from "./pages/TypeList";
import CourseList from "./pages/CourseList";
import NavBar from "./components/NavBar";
import {Routes, Route, Outlet, Navigate} from "react-router-dom";
import EditCourse from "./pages/EditCourse";

const CourseWrapper = () => (
    <>
        <h1>Course Page</h1>
        <Outlet/>
    </>
)

const TypeWrapper = () => (
    <>
        <h1>Type Course Page</h1>
        <Outlet/>
    </>
)

const ProtectedRoutes = ({isLoggedIn}) => {
    if (!isLoggedIn) {
        return <Navigate to={ROUTES.LOGIN} replace={true}/>
    }

    return (
        <>
            <NavBar/>
            <hr/>
            <Outlet/>
        </>
    )
}

function App() {

    const [isLoggedin, setIsLoggedIn] = React.useState(true);

    return (
        <div className="App">

            <Routes>
                <Route path={ROUTES.LOGIN} element={<h1>Login Page</h1>} index={true}/>
                <Route path={ROUTES.DASHBOARD} element={<ProtectedRoutes isLoggedIn={isLoggedin}/>}>
                    <Route path={ROUTES.COURSE_LIST} element={<CourseWrapper/>}>
                        <Route element={<CourseList/>} index={true}/>
                        <Route path={ROUTES.ADD_COURSE} element={<AddCourse/>}/>
                        <Route path={`${ROUTES.EDIT_COURSE}/:courseId?`} element={<EditCourse/>}/>
                    </Route>
                    <Route path={ROUTES.TYPE_LIST} element={<TypeWrapper/>}>
                        <Route element={<TypeList/>} index={true}/>
                        <Route path={ROUTES.ADD_TYPE} element={<AddType/>}/>
                    </Route>
                    <Route path={"*"} element={<h3>Page not Found</h3>}/>
                </Route>
            </Routes>

        </div>
    );
}

export default App;
