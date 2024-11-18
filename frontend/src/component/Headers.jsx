import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Headers = ({token,setToken,setStuToken}) => {
  return (
    <div> <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/courselist">Course List</Nav.Link>
        {
          token === "" ? <Nav.Link href="/profile">Profile</Nav.Link> : <></>
        }
        {
          token === "" ? <>
         
          </> :   
           <Nav.Link href="/adminmanage">Admin Manage</Nav.Link>
        }
          <Nav.Link href="/" onClick={() => {
                if (setToken) setToken("");
                if (setStuToken) setStuToken("");
              }}>
                Logout
              </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar></div>
  )
}

export default Headers