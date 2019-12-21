import React, {Component} from 'react';
import axios from 'axios';
import Navigation from "./Components/Navigation/Navigation";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

class App extends Component {

  render() {
        return (
            <div>
                <Router>
                    <Navigation/>
                </Router>
            </div>
        );
    }
}

export default App;