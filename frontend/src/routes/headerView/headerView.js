import {Component} from "react";
import logo from "../../assets/logo.jpeg";
import { Link } from 'react-router-dom';
import  './headerView.css';
import { connect } from 'react-redux';


class HeaderView extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <header className="header">
                <Link to='/'>
                <img src={logo} className="logo" alt="logo" />
                </Link>
            </header>
    );
    }
}

function mapStateToProps(state) {
    return {}
}
function mapDispatchToProps(dispatch) {

    return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderView);