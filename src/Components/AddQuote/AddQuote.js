import React, {Component} from 'react';
import {CATEGOTIES} from "../../constants";
import axios from 'axios';

import Title from "../UI/Title/Title";
import {Form, Button, Input, Label} from "reactstrap";

class AddQuote extends Component {

    state = {
        author: null,
        category: CATEGOTIES[0].id,
        text: null,
    };

    inputHandler = e => this.setState({[e.target.name]: e.target.value});

    addQuote = async e => {
        e.preventDefault();
        if(this.state.author && this.state.category && this.state.text) {
            await axios.post('https://control-8-kadyr.firebaseio.com/quotes.json', this.state)
            this.props.history.replace('/');
        }
    };

    render() {
        return (
            <div>
                <Title>Submit new quote</Title>
                <Form>
                    <label className='w-100'>
                        <p>Categories</p>
                        <select name='category' className="custom-select" id="inputGroupSelect02" onChange={this.inputHandler}>
                            {CATEGOTIES.map(category => {
                                return <option key={category.id}>{category.id}</option>
                            })}
                        </select>
                    </label>
                    <Label for="Author" className='mt-2'>Author</Label>
                    <Input type="text" name="author" id="Author" placeholder="Enter author" onChange={this.inputHandler} />
                    <Label for="text" className='mt-2'>Quote text</Label>
                    <Input type="textarea" name="text" id="Author" placeholder="Enter quote text" style={{height: '200px'}} onChange={this.inputHandler} />
                    <Button onClick={this.addQuote} className='mt-3' >Save</Button>
                </Form>
            </div>
        );
    }
}

export default AddQuote;