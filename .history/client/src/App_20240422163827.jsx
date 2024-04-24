import { BrowserRouter, Route, Routes } from "react-router-dom";
// import 'flowbite/css/flowbite.css';
import  Home  from "./pages/Home";
import Signin from "./pages/Signin";
import Signout from "./pages/Signout";
import Project from "./pages/Project";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/signin" element={<Signin/>}></Route>
            <Route path="/signout" element={<Signout/>}></Route>
            <Route path="/projects" element={<Project/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;