import React, { Fragment, Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';




export default class HeaderView extends Component {

    render() {

        return (

            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>myFlix</Navbar.Brand>
            </Navbar>

        )
    }
}

