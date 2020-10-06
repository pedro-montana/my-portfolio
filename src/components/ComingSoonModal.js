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
        <img src={FlagDE} width="24" alt="Deutsch" /> Deutsch
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="mx-auto">Kommt bald in deutscher Sprache.</Modal.Title>
        </Modal.Header>
        <Modal.Body className="mx-auto">Bitte kehren Sie zur englischen Version zurück.</Modal.Body>
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
