import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import NavDropdown from 'react-bootstrap/NavDropdown';

class Navigationbar extends Component {

    render() {
        return (
            // <Navbar bg="light" variant="light">
            //     <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            //         <Nav className="mr-auto">
            //             <Nav.Link href="#home">Home</Nav.Link>
            //             <Nav.Link href="#features">Features</Nav.Link>
            //             <Nav.Link href="#pricing">Pricing</Nav.Link>
            //         </Nav>
            //         <Form inline>
            //             <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            //             <Button variant="outline-info">Search</Button>
            //         </Form>
            // </Navbar>
            <nav class="navbar navbar-expand-lg navbar-light bg-light" >
                <div className="col-md-1 my-4"></div>
                <a class="navbar-brand" href="#"> </a>
                    <img src={process.env.PUBLIC_URL + '/bitly.png'} width="100" height="53.4" class="d-inline-block align-top" alt="" />
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="col-sm-1"></div>
                    <div class="collapse navbar-collapse" id="navbarText" >
                        <ul class="navbar-nav " >
                            <li class="nav-item" style={{paddingRight: "1.5rem"}}>
                                <a class="nav-link" href="#"  >Why Bitly?</a>
                            </li>
                            <li class="nav-item" style={{paddingRight: "1.5rem"}}>
                                <a class="nav-link" href="#"  >Solutions</a>
                            </li>
                            <li class="nav-item" style={{paddingRight: "1.5rem"}}>
                                <a class="nav-link" href="#"  >Features</a>
                            </li>
                            <li class="nav-item" style={{paddingRight: "1.5rem"}}>
                                <a class="nav-link" href="#"  >Pricing</a>
                            </li>
                            <li class="nav-item" style={{paddingRight: "1.5rem"}}>
                                <a class="nav-link" href="#"  >Resources</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-1"></div>
                    <div class="collapse navbar-collapse" id="navbarText" >
                        <ul class="navbar-nav " >
                            <li class="nav-item" style={{paddingRight: "1.5rem"}}>
                                <a class="nav-link" href="#"  >Login</a>
                            </li>
                            <li class="nav-item" style={{paddingRight: "1.5rem", color:"blue"}}>
                                <a class="nav-link" href="#"  style={{color:"#2a5bd7"}} >Sign Up</a>
                            </li>
                        </ul>
                    </div>
            </nav>
        )
    }

}

export default Navigationbar;