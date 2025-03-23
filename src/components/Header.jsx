  import 'bootstrap/dist/css/bootstrap.min.css';
  import { Container, Navbar, Nav } from 'react-bootstrap';
  import React, { useState } from 'react';
  import ContactMeModal from './ContactMeModal';

  export default function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="#">Yeong's Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                fixed="right"
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#AboutMe">About Me</Nav.Link>
                <Nav.Link href="#Skills">Skills</Nav.Link>
                <Nav.Link href="#project">Project</Nav.Link>
                <Nav.Link href="#career">Career</Nav.Link>
                <Nav.Link href="#education">Education</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#Contact" onClick={handleShow}>
                  Contact Me
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div>
          <ContactMeModal show={show} handleClose={handleClose} />
        </div>
      </>
      
    );
  }
