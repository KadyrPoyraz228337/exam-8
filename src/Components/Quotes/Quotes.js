import React, {Component} from 'react';
import axios from 'axios';

import {Col, Row} from "reactstrap";
import Sidebar from "../Sidebar/Sidebar";
import CardElem from "../UI/Card/Card";

class Quotes extends Component {
    state = {
      quotes: null,
    };
    async componentDidMount() {
        const resp = await axios.get('https://control-8-kadyr.firebaseio.com/quotes.json');
        this.setState({quotes: resp.data})
    }

    render() {
        return this.state.quotes && (
            <Row>
                <Col xs='4' sm='4'>
                    <Sidebar/>
                </Col>
                <Col xs='8' sm='8'>
                    <div className='border p-2 overflow-auto' style={{borderRadius: '.255rem', height: 'calc(100vh - 80px)'}}>
                        {Object.keys(this.state.quotes).map(quote => <CardElem key={quote} title={this.state.quotes[quote].author} text={this.state.quotes[quote].text}/>).reverse()}
                    </div>
                </Col>
            </Row>
        )
    }
}

export default Quotes;