import logo from './logo.svg';
import './App.css';
import React from "react";
import {ROUTES} from "./constants";
import AddCourse from "./pages/AddCourse";
import AddType from "./pages/AddType";
import TypeList from "./pages/TypeList";
import CourseList from "./pages/CourseList";
import NavBar from "./components/NavBar";

function App() {
  const [nav, setNav] = React.useState(ROUTES.COURSE_LIST);

  let Component;

  switch (nav){
    case ROUTES.ADD_COURSE:
      Component = AddCourse;
      break;
    case ROUTES.ADD_TYPE:
      Component = AddType;
      break;
    case ROUTES.TYPE_LIST:
      Component = TypeList;
      break;
    case ROUTES.COURSE_LIST:
      Component = CourseList;
      break;
    default:
      Component = CourseList;
      break;
  }

  return (
    <div className="App">
      <NavBar onNavigate={setNav}/>
      <Component onNavigate={setNav}/>

    </div>
  );
}

export default App;
