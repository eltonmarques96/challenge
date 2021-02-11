import React from 'react';
import { Button } from 'react-bootstrap';
import './header.css';

class header extends React.Component{
    render(){
        return(
            <div className="header">
                <h2>Dev Challenge!</h2>
                <div className="button">
                    <a href="/"><Button>Back</Button></a>
                </div>
            </div>
        )
    }
}

export default header;