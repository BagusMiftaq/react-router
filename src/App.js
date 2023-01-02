import logo from './logo.svg';
import './App.css';
import React from "react";
import {ROUTES} from "./constants";
import AddCourse from "./pages/AddCourse";
import AddType from "./pages/AddType";
import TypeList from "./pages/TypeList";
import CourseList from "./pages/CourseList";
import NavBar from "./components/NavBar";
import {Routes, Route} from "react-router-dom";
import addCourse from "./pages/AddCourse";
import addType from "./pages/AddType";

function App() {

    const menu = [
        {path: "/", index:true, element: <h1>Dashboard Page</h1>},
        {path: ROUTES.COURSE_LIST, element: <CourseList/>},
        {path: ROUTES.TYPE_LIST, element:<TypeList/>},
        {path: ROUTES.ADD_COURSE, element:<AddCourse/>},
        {path: ROUTES.ADD_TYPE, element:<AddType/>},
        {path: "*", element:<h1>Page not found</h1>}
    ];

    return (
        <div className="App">
            <NavBar/>
            <Routes>
                {menu.map((item)=>(
                    <Route path={item.path} element={item.element} index={item.index}/>
                ))}
            </Routes>

        </div>
    );
}

export default App;
