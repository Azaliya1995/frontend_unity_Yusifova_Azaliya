import React from 'react';
import './App.css';
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";
import PhotosList from "./Components/PhotosList";

function App() {
    return (
        <Router>
            <Switch>
                <Route pat='/'
                       component={PhotosList}/>
            </Switch>
        </Router>
    );
}

export default App;
