/* react-bootstrap modal을 이용한 youtube팝업 */
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AiFillVideoCamera } from 'react-icons/ai';

const Trailer = () => {
    const [show, setShow] = useState(false);
  return (
    <div>
        <p variant="primary" onClick={() => setShow(true)}>
        <AiFillVideoCamera />예고편 보기
    </p>

  <Modal
    show={show}
    onHide={() => setShow(false)}
    dialogClassName="modal-90w"
    aria-labelledby="example-custom-modal-styling-title"
  >
    <Modal.Header closeButton>

    </Modal.Header >
    <Modal.Body>

    </Modal.Body>
  </Modal></div>
  )
}

export default Trailer