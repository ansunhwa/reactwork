import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap'; 
//import Button from 'react-bootstrap/Button';
//import Modal from 'react-bootstrap/Modal';

const Header = () => {
    // 여기!!
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <header id="header"> 
            
            <h1>안녕하세요</h1>
            <div>
            <Button variant="outline-success">회원가입</Button>  <br/>
            <Button variant="dark" onClick={handleShow} >로그인</Button>
            </div>

            <Login show={show} handleClose={handleClose}/>   {/* 여기!! */}

        </header> 
    ) 
}

function Login({show, handleShow, handleClose}) {   //여기!!
    return (
        <div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
        </div>
    )
}
  

export default Header;