import React from 'react';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';

class TugasState extends React.Component {
    render() {
        return (
            <div>
                <h5 class="judul">Form Login Statefull Component</h5>
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
                                                <Form.Control type="Username" placeholder="Massukkan Username" />
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} controlId="formBasicPassword">
                                            <Form.Label column sm="3">Password</Form.Label>
                                            <Col sm="9">
                                                <Form.Control type="password" placeholder="Massukkan Password Anda" />
                                            </Col>
                                        </Form.Group>
                                        <Button className="buttons" variant="primary" type="submit">
                                            Login
                                    </Button>
                                        <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="Remember me" />
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
}

export default TugasState;