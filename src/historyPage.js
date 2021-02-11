import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import './App.css'

class History extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            ObjectID: 0,
            Name: '',
            pid: 0,
            date: '',
            subject: '',
            message: '',
            attachment: []
        }
    }
    componentDidMount(){
        this.getResults()
    }
    getResults(){
        axios.get("http://localhost:3001/api/history")
        .then((response)=>{
            if (response.status == 200){
                console.log("Message Recieved.")
                this.state.ObjectID = response.data.ObjectID
                this.state.Name = response.data.name
                this.state.pid = response.data.pid
                this.state.date = response.data.date
                this.state.subject = response.data.subject
                this.state.message = response.data.message
                this.state.attachment = response.data.attachment
            }else {
                alert("Message failed to recieve.")
            }
          })
    }

    editItem(value){
        
    }

    deleteItem(index){
        
    }

        render() {
        return(
            <div className="table">
                <table border='1'>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Process ID</th>
                        <th>Process Date</th>
                        <th>Subject</th>
                        <th>Message</th>
                        <th>Attachments</th>
                    </tr>
                    </thead>
                    <tbody>
                            <tr>
                                <td> { this.state.ObjectID } </td>
                                <td> { this.state.Name }</td>
                                <td> { this.state.pid } </td>
                                <td> { this.state.date } </td>
                                <td> { this.state.subject } </td>
                                <td> { this.state.message } </td>
                                <td> { this.state.attachment } </td>
                                <td> <Button onClick={this.editItem()}> Edit </Button> </td>
                                <td> <Button onClick={this.deleteItem()}> Delete </Button> </td>
                            </tr>
                        
                    </tbody>
                </table>
            </div>
            )
        }
}

export default History;