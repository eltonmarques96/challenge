import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class HomePage extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <a href="/new"><Button>New Request</Button></a>&nbsp;
                    <a href="/history"><Button>History</Button></a>
                </div>
            </BrowserRouter>
        )
    }
}

export default HomePage;