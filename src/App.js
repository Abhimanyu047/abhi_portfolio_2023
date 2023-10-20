import {BrowserRouter as Router, Routes, Route, Navigate, HashRouter, BrowserRouter} from "react-router-dom";
import ReactGA from 'react-ga';
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects";
import ProjectPage1 from "./assets/configs/ProjectPage1";
import ProjectPage2 from "./assets/configs/ProjectPage2";
import Skills from "./pages/Skills/Skills";
import Blogs from "./pages/Blogs"
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer/Footer";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react'
import ProjectPage3 from "./assets/configs/ProjectPage3";
import ProjectPage4 from "./assets/configs/ProjectPage4";
import ProjectPage5 from "./assets/configs/ProjectPage5";
import ProjectPage6 from "./assets/configs/ProjectPage6";
import About from "./About";
import AboutMe from "./assets/configs/AboutMe";

if (typeof process.env.REACT_APP_TRACKING_ID !== 'undefined') {
    ReactGA.initialize(process.env.REACT_APP_TRACKING_ID)
}


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar/>
                <ScrollToTop/>
                <Routes>
                    {/* Redirect / to /abhi_portfolio_2023 */}
                    <Route path="/" element={<Navigate to="/abhi_portfolio_2023" />} />
                    <Route path={"/abhi_portfolio_2023"} exact element={<Home/>}/>
                    <Route path={"/projects"} exact element={<Projects/>}/>
                    <Route path={"/about"} exact element={<About/>}/>
                    <Route path={"/aboutMe"} exact element={<AboutMe/>}/>
                    <Route path={"/project-1"} element={<ProjectPage1 />}/>{/* Route for ProjectPage1 */}
                    <Route path="/project-2" element={<ProjectPage2 />} /> {/* Route for ProjectPage2 */}
                    <Route path="/project-3" element={<ProjectPage3 />} /> {/* Route for ProjectPage3 */}
                    <Route path="/project-4" element={<ProjectPage4 />} /> {/* Route for ProjectPage3 */}
                    <Route path="/project-5" element={<ProjectPage5 />} /> {/* Route for ProjectPage3 */}
                    <Route path="/project-6" element={<ProjectPage6 />} /> {/* Route for ProjectPage3 */}
                    {/* <Route path={"/blogs"} exact element={<Blogs/>}/> */}
                    <Route path={"/skills"} exact element={<Skills/>}/>
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>

    )

}

export default App;
