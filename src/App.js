import React, {Component} from 'react';
import Container from "reactstrap/es/Container";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Navigation from "./Components/Navigation/Navigation";
import Quotes from "./Components/Quotes/Quotes";
import AddQuote from "./Components/AddQuote/AddQuote";
import QuoteEdit from "./Components/QuoteEdit/QuoteEdit";


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
                            <Route path='/add-quote' component={AddQuote}/>
                            <Route path='/quote/edit/:id' component={QuoteEdit}/>
                            <Route render={() => <h1>Not found</h1>}/>
                        </Switch>
                    </Container>
                </Router>
            </div>
        );
    }
}

export default App;