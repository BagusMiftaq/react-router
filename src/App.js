import './App.css';
import React from "react";
import {ROUTES} from "./constants";
import AddCourse from "./pages/AddCourse";
import AddType from "./pages/AddType";
import TypeList from "./pages/TypeList";
import CourseList from "./pages/CourseList";
import NavBar from "./components/NavBar";
import {Routes, Route, Outlet} from "react-router-dom";
import EditCourse from "./pages/EditCourse";

const CourseWrapper=()=>(
    <>
        <h1>Course Page</h1>
        <Outlet/>
    </>
)

const TypeWrapper=()=>(
    <>
        <h1>Type Course Page</h1>
        <Outlet/>
    </>
)

function App() {

    return (
        <div className="App">
            <NavBar/>
            <Routes>
                <Route path={ROUTES.DASHBOARD} element={<h1>Dashboard Page</h1>} index={true}/>
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
            </Routes>

        </div>
    );
}

export default App;
