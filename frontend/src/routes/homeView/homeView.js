import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomeView extends Component {
    constructor() {
        super();
        this.state = {
        }
        document.title = "Home | Orders ";
    }
    render() {
        return (
            <article>
            Hola
            </article>
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
export default connect(mapStateToProps, mapDispatchToProps)(HomeView);