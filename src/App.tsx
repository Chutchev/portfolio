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
import Layout from "./containers/Layout/Layout";
import {Fade} from "react-awesome-reveal";
import YellowNeon from "./components/Name/NeonAnimation";

function App() {
    return (
        <div className="App">
            <Fade>
                <YellowNeon/>
                <Layout>
                    <Router>
                        <Routes>
                            <Route path="" element={<HomePage/>}/>
                            <Route path="about" element={<AboutPage/>}/>
                            {/*<Route path="projects" element={<div>projects</div>}/>*/}
                            {/*<Route path="contacts" element={<div>Contacts</div>}/>*/}
                        </Routes>
                    </Router>
                </Layout>
            </Fade>
        </div>
    );
}


export default App;
