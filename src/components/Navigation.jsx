import React from 'react'
import { Nav,Navbar, Form, Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark" className = "navTop">
            <Container fluid>
                <Navbar.Brand href="#">
                    <img width = {90} src="Netflix.png" alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Link to = "/" className = "nav-item">HOME </Link>
                    <Link to="/movies" className = "nav-item">MOVIES </Link>
                    <Link to="#" className = "nav-item">NEW & POPULAR </Link>
                    <Link to="#" className = "nav-item">MY LIST </Link>
                </Nav>
                <Form className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="nav-input"
                    aria-label="Search"
                    />
                    <Button variant="outline-danger">Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation