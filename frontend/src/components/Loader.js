import React from 'react';
import { Spinner, Modal } from 'react-bootstrap';

const Loader = ({ show }) => {
  console.log
  return (
    <Modal
      show={show}
      backdrop="static"
      keyboard={false}
      centered
      dialogClassName="Loader"
    >
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Modal>
  );
};

export default Loader;
