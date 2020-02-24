import React from 'react';
import {Row, Col, Container, Card} from "react-bootstrap";

const Landing = () => {
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
                                <Card.Title>Bem-vindo(a) ao Criador de Amigo Oculto</Card.Title>
                                <Card.Text>Para continuar por favor:</Card.Text>
                                <Card.Link href="/cadastro">Cadastre-se</Card.Link>
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
};

export default Landing;