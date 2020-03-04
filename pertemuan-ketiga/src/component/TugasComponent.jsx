import React, { useState } from 'react'; //menjalankan function arrow
import './TugasComponent.css';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';

const TugasComponent = () => {
    const [input, setInput] = useState({
        username: "",
        password: "",
        remember: false

    });

    function handleChange(value, name) {
        setInput({ ...input, [name]: value });
    }

    function submitForm(e) {
        console.log(input);
    }


    return (
        <div>
            <h5 class="judul">Form Login Stateless Component</h5>
            <div>
                <Row>
                    <Col></Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>Tugas Pertemuan Ketiga</Card.Title>
                                <Form>
                                    <Form.Group as={Row} controlId="formBasicUsername">
                                        <Form.Label column sm="3">Username</Form.Label>
                                        <Col sm="9">
                                            <Form.Control type="Username" placeholder="Massukkan Username" value={input.username}
                                                onChange={event => handleChange(event.target.value, "username")} />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} controlId="formBasicPassword">
                                        <Form.Label column sm="3">Password</Form.Label>
                                        <Col sm="9">
                                            <Form.Control type="password" placeholder="Massukkan Password Anda" value={input.password}
                                                onChange={event => handleChange(event.target.value, "password")} />
                                        </Col>
                                    </Form.Group>
                                    <Button className="buttons" variant="success" onClick={submitForm}>
                                        Login
                                    </Button>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Remember me" checked={input.remember} onChange={event => handleChange(event.target.value, "remember")} />
                                    </Form.Group>
                                    <Button className="cancel" variant="primary" type="submit">
                                        Cancel
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col></Col>
                </Row>
            </div>
        </div >
    );
}

export default TugasComponent; //Digunakan agar component dapat digunakan dipanggil saja

