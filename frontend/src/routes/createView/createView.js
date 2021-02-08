import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../sharedStyles.css'

class CreateView extends Component {
        constructor(props) {
        super(props);
        this.state = {
            subject: 'dsd',
            body: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        document.title = "Create | Orders ";
    }

    handleChange(event) {
            let name = event.target.name;
            const value = event.target.value;
            this.setState(
                {
                    [name]: value,
                });
        }


    handleSubmit(event) {

            fetch('http://localhost:3001/order-request/',{
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    hola: "hola-wep",
                    chau: "chau-che"
                })
            })
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })
        alert('A name was submitted: ' + this.state.subject);
        event.preventDefault();
    }



    render() {
        return (
            <div id = "container">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Subject :</Form.Label>
                        <Form.Control name="subject" type="text" value={this.state.subject} onChange={this.handleChange} />
                        <Form.Label>Body: </Form.Label>
                        <Form.Control name="body" type="text" value={this.state.body} onChange={this.handleChange} />
                    </Form.Group>
                    <Button type="submit" value="Submit" >Submit</Button>
                </Form>

            </div>

    )
    }
}

function mapStateToProps(state) {
    return {
    }
}
function mapDispatchToProps(dispatch) {

    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateView);