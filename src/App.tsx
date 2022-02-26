import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from "./containers/Home/Home";

import {
    BrowserRouter as Router,
    Route,
    Link, Routes
} from "react-router-dom";
import AboutPage from "./containers/About/About";


function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="" element={<HomePage/>}/>
                    <Route path="about" element={<AboutPage/>}/>
                    {/*<Route path="projects" element={<div>projects</div>}/>*/}
                    {/*<Route path="contacts" element={<div>Contacts</div>}/>*/}
                </Routes>
            </Router>
        </div>
    );
}


export default App;
