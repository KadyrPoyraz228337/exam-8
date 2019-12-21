import React, {Component} from 'react';
import axios from 'axios';
import Container from "reactstrap/es/Container";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Navigation from "./Components/Navigation/Navigation";
import Quotes from "./Components/Quotes/Quotes";


class App extends Component {

  render() {
        return (
            <div>
                <Router>
                    <Navigation/>
                    <Container>
                        <Switch>
                            <Route exact path='/' component={Quotes}/>
                            <Route path='/categories' component={Quotes}/>
                            <Route exact path='/add-quote' render={() => <h1>Add Quotes</h1>}/>
                            <Route render={() => <h1>Not found</h1>}/>
                        </Switch>
                    </Container>
                </Router>
            </div>
        );
    }
}

export default App;