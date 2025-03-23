import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import gmailIcon from "../assets/gmail.png";
import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.png";
import './ContactMeModal.css'; 

export default function ContactMeModal({ show, handleClose }) {
  return (
    <Modal 
      show={show} 
      onHide={handleClose} 
      dialogClassName="custom-modal" 
      backdropClassName="custom-backdrop"
    >
      <Modal.Header closeButton>
        <Modal.Title>Contact Me</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className = "body-text">
        <p>
          <img src={gmailIcon} alt="Gmail" style={{ width: '28px', height: '20px' }} />
           : <a href="mailto:wi10004ok@gmail.com"  style={{ marginLeft: '8px' }}>wi10004ok@gmail.com</a>
        </p>
        <p>
          <img src={githubIcon} alt="GitHub" style={{ width: '28px', height: '28px' }} />
          : <a href="https://github.com/YeongsHub" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '8px' }}>    YeongsHub</a>
        </p>
        <p>
          <img src={linkedinIcon} alt="LinkedIn" style={{ width: '28px', height: '25px' }} />
          : <a href="https://www.linkedin.com/in/yeongyung-wi-143990100/" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '8px' }}>    LinkedIn</a>
        </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
