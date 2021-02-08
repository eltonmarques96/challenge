import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link, withRouter} from 'react-router-dom'


class orderRequestView extends Component {
    constructor(props) {
        super(props)
    }

    /*
    Detect change in url and trigger new search with getResults().
     */
    componentDidUpdate(prevProps, prevState) {
        }

}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
    }
}
/*
https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/withRouter.md
 */
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(orderRequestView));