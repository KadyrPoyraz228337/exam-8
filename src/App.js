import React, {Component} from 'react';
import axios from 'axios';
import Container from "reactstrap/es/Container";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Navigation from "./Components/Navigation/Navigation";
import Sidebar from "./Components/Sidebar/Sidebar";
import {Col, Row} from "reactstrap";


class App extends Component {

  render() {
        return (
            <div>
                <Router>
                    <Navigation/>
                    <Container>
                        <Row>
                            <Col xs='4' sm='4'>
                                <Sidebar/>
                            </Col>
                        </Row>
                    </Container>
                </Router>
            </div>
        );
    }
}

export default App;