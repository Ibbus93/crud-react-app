import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {SIGN_IN} from "./paths";
import SignIn from "../components/SignIn";
import Home from "../views/Home";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route location={SIGN_IN} component={SignIn}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;
