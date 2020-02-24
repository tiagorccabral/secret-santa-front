import React, {Component} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";

class Signup extends Component {
    render () {
        return (
            <div
                style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
            >
                <Container
                >
                    <Row className="justify-content-xl-center">
                        <Col xl="auto">
                            <Card className="text-center">
                                <Card.Body>
                                    <Card.Title>Crie sua conta no Criador de Amigos Ocultos</Card.Title>
                                    <Card.Text/>
                                    <Card.Text>
                                        ou
                                    </Card.Text>
                                    <Card.Link href="/login">Faça login</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Signup;