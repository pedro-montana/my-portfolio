import React, { useState } from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import FlagDE from "../img/flags/DE.png";

function ComingSoonModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div onClick={handleShow}>
        <img src={FlagDE} width="24" /> Deutsch
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="mx-auto">Deutsche denn bald kommt!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="mx-auto">Please choose on of the other languages. Thank you!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ComingSoonModal;
