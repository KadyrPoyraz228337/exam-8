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
        this.getQuotesData();
    }

    async componentDidUpdate(prevProps) {
        if(this.props.match.params.name && prevProps.match.params.name !== this.props.match.params.name) {
            const resp = await axios.get(`https://control-8-kadyr.firebaseio.com/quotes.json?orderBy="category"&equalTo="${this.props.match.params.name}"`);
            this.setState({quotes: resp.data});
        } else if (this.props.match.params.name === 'all') {
            this.getQuotesData();
        }
    }

    getQuotesData = async () => {
        const resp = await axios.get('https://control-8-kadyr.firebaseio.com/quotes.json');
        this.setState({quotes: resp.data})
    };

    deleteHandler = async id => {
        await axios.delete(`https://control-8-kadyr.firebaseio.com/quotes/${id}.json`);
        this.getQuotesData();
    };

    render() {
        const size = this.props.match.params.name ? '110px' : '80px';
        return (
            <Row>
                <Col xs='4' sm='4'>
                    <Sidebar/>
                </Col>
                <Col xs='8' sm='8'>
                    {this.props.match.params.name && <h4 className='text-center'>{this.props.match.params.name}</h4>}
                    {this.state.quotes && <div className='border p-2 overflow-auto' style={{borderRadius: '.255rem', height: 'calc(100vh - ' + size + ')'}}>
                            {Object.keys(this.state.quotes).map(quote => <CardElem key={quote} DeleteButtonClick={() => this.deleteHandler(quote)} title={this.state.quotes[quote].author} id={quote} text={this.state.quotes[quote].text}/>).reverse()}
                        </div>
                    }
                </Col>
            </Row>
        )
    }
}

export default Quotes;