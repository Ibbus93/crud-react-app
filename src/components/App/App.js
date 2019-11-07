// React libraries
import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

// Components
import SignIn from "../SignIn";

// Views
import Header from "../../views/Header";
import Footer from "../../views/Footer";
import Home from "../../views/Home";
import NotFound from "../../views/NotFound";

// Route paths
import {SIGN_IN} from "../../routes/paths";

// Style sheets
import './App.scss';


const App = () => (
    <div className="app-container">
        <BrowserRouter>
            <Header/>
            <div className="app-content">
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path={SIGN_IN} component={SignIn}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
            <Footer/>
        </BrowserRouter>
    </div>
);


export default App;
