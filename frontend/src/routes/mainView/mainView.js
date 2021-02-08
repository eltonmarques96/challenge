import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderView from '../headerView/headerView';
import './mainView.css'

class MainView extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <HeaderView/>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(MainView);