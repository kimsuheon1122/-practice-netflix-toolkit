import React from 'react'
import { Nav,Navbar, Form, Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark" className = "navTop">
            <Container fluid>
                <Navbar.Brand href="/">
                    <img width = {120} src="AWESOME_FILM.png" alt="AWESOME_FILM" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Link to = "/" className = "nav-item"> 홈 </Link>
                    <Link to="/movies" className = "nav-item"> 영화 </Link>
                    <Link to="#" className = "nav-item"> 새로운 & 인기 영화 </Link>
                    <Link to="#" className = "nav-item"> 찜한 목록 </Link>
                </Nav>
                <Form className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="검색어를 입력해주세요"
                    className="nav-input"
                    aria-label="Search"
                    />
                    <Button 
                        variant="outline-danger"
                        >
                            검색
                    </Button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation