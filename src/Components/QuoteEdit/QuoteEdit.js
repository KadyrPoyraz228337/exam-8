import React, {Component} from 'react';
import axios from 'axios';
import Title from "../UI/Title/Title";
import {Button, Form, Input, Label} from "reactstrap";
import {CATEGOTIES} from "../../constants";

class QuoteEdit extends Component {

    state = null;

    async componentDidMount() {
        this.getQuoteById();
    }



    inputHandler = e => this.setState({[e.target.name]: e.target.value});

    editQuote = async () => {
        await axios.put('https://control-8-kadyr.firebaseio.com/quotes/' + this.props.match.params.id + '.json', this.state);
        this.props.history.replace('/');
    };

    getQuoteById = async () => {
        const resp = await axios.get('https://control-8-kadyr.firebaseio.com/quotes/' + this.props.match.params.id + '.json');
        this.setState({...resp.data});
    };

    render() {

        return this.state && (
            <div>
                <Title>Edit quote</Title>
                <Form>
                    <label className='w-100'>
                        <p>Categories</p>
                        <select name='category' className="custom-select" id="inputGroupSelect02" onChange={this.inputHandler}>
                            {CATEGOTIES.map(category => {
                                return <option key={category.id}>{category.id}</option>
                            })}
                        </select>
                    </label>
                    <Label for="Author" className='mt-2' value={this.state.category}>Author</Label>
                    <Input type="text" name="author" id="Author" placeholder="Enter author" onChange={this.inputHandler} value={this.state.author}/>
                    <Label for="text" className='mt-2'>Quote text</Label>
                    <Input type="textarea" name="text" id="Author" placeholder="Enter quote text" style={{height: '200px'}} onChange={this.inputHandler} value={this.state.text}/>
                    <Button onClick={this.editQuote} className='mt-3' >Save edit</Button>
                </Form>
            </div>
        );
    }
}

export default QuoteEdit;