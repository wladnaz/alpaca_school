import React from "react";
import {Navbar, NavItem} from "react-materialize";
import {withRouter} from 'react-router';
import { connect } from "react-redux";

const Header = ({history, name}) => {
    console.log(name);
    console.log("Header Rendered");

    return(<Navbar onClick={(e)=>{e.preventDefault(); history.push('/');}} brand='Alpaca' right>
            <NavItem onClick={() => history.push("/courses")}>Courses</NavItem>
            <NavItem onClick={() => history.push("/login")}>Login</NavItem>
        </Navbar>);
};

const mapStateToProps = (state, ownProps) => ({
    name: state.login,
    history: ownProps.history
});

const H = connect(mapStateToProps)(Header);

export default withRouter(H);