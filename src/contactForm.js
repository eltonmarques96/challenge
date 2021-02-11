import React from "react";
import axios from 'axios';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class Contact extends React.Component {
    state = {
        selectedFile: null,
        name: '',
        pid: '',
        date: '',
        subject:'',
        message: '',
        attachment:''
    }

    onFileChange = event => {
        this.setState({selectedFile: event.target.files[0]})
    }

    onNameChange(event) {
        this.setState({name: event.target.value})
    }

    onProcessIDChange(event) {
        this.setState({pid: event.target.value})
    }

    onReqDateChange(event) {
        this.setState({date: event.target.value})
    }

    onSubjectChange(event) {
        this.setState({subject: event.target.value})
    }

    onMsgChange(event) {
        this.setState({message: event.target.value})
    }

    onAttachmentChange(event) {
        this.setState({attachment: event.target.value})
    }

    resetForm(){
        this.setState({name: '', pid: '', date: '',subject:'', message: '', attachment: ''})
    }

    submitForm(e){
        e.preventDefault();
        axios.post("http://localhost:3001/api/send")
        .then((response)=>{
          console.log(response.data)
          if (response.status == 200){
              alert("Message Sent.");
            //   this.resetForm();
          }else {
              alert("Message failed to send.")
          }
        })
    }

    onFileUpload = () => {
        const formData = new FormData();
        formData.append(
          "myFile",
          this.state.selectedFile,
          this.state.selectedFile.name
        );
        console.log(this.state.selectedFile);
        axios.post("http://localhost:3001/api/uploadfile", formData);
    }

    render() {
        return (
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title">
                                <h2 className="title">Contact Us</h2>
                                <p>Let us know what you think! In order to provide better service,
                                     please do not hesitate to give us your feedback. Thank you.</p><hr/>
                                <form id="contact-form" method="POST" action="/send">
                                <div className="form-group">
                                <div className="row">
                                <div className="col-md-6">
                                    <input placeholder = "Name"  id="name" type="text" 
                                       className="form-control" required value={this.state.name} 
                                       onChange={this.onNameChange.bind(this)}/>
                                </div>
                                <div className="col-md-6">
                                    <input placeholder = "Process ID"  id="pid" type="pid"
                                      className="form-control" required value={this.state.pid} 
                                      onChange={this.onProcessIDChange.bind(this)}/>
                                </div>
                                </div>
                                </div>
                                <div className="form-group">
                                    <input placeholder = "Request Date"  id="date" type="date"
                                      className="form-control" required value={this.state.date} 
                                      onChange={this.onReqDateChange.bind(this)}/>
                                </div>
                                <div className="form-group">
                                    <input placeholder = "Subject"  id="subject" type="text"
                                      className="form-control" required value={this.state.subject}
                                      onChange={this.onSubjectChange.bind(this)}/>
                                </div>
                                <div className="form-group">
                                    <textarea placeholder = "Message"  id="message" 
                                       className="form-control" rows="3" 
                                       required value={this.state.message}
                                       onChange= {this.onMsgChange.bind(this)}/>
                                </div>
                                <div>
                                    <input type="file" onChange={this.onFileChange} multiple />
                                    <Button onClick={this.onFileUpload}>
                                        Upload!
                                    </Button>
                                </div>
                                <br />
                                <div>
                                    <Button type="submit" className="primary-btn submit" onClick={this.submitForm}>Submit</Button>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;