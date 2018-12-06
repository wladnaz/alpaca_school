import React from "react";
import {Row, Input, Col, Button} from "react-materialize";
import { connect } from "react-redux";
import { doLogin } from "../redux/actions";

class Login extends React.Component {

    state = {
        name: "",
    };

    inputHandler = ({currentTarget}) => {
        const {value} = currentTarget;
        this.setState({name: value});
    }

    // submitHandler = () => {
    //     console.log("Submit handler");
        
    // }

    render() {
        return (
            <Row>
                <Col s={4} className='grid-example'/>
                <Input onChange={this.inputHandler} s={4} label="Name" />
                <Col s={4} className='grid-example'/>
                <Button onClick={() => this.props.doLogin(this.state.name)} waves='light'>Sign In</Button>
            </Row>
        );
    }
}

const mapDispatchToPropps = dispatch => ({
    doLogin: credentials => dispatch(doLogin(credentials))
});

export default connect(null, mapDispatchToPropps)(Login);