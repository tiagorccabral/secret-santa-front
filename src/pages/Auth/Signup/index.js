import React, {Component} from 'react';
import {Form, Button, Card, Col, Container, Row} from "react-bootstrap";

class Signup extends Component {
    state = {
        email: "",
        first_name: "",
        last_name: "",
        password: "",
        password_confirmation: ""
    };

    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    }

    render() {
        return (
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Container>
                    <Row className="justify-content-xl-center">
                        <Col xl="8">
                            <Card>
                                <Card.Body>
                                    <Card.Title className="text-center">Crie sua Conta</Card.Title>
                                    <Card.Text/>
                                    <Form>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>E-mail</Form.Label>
                                            <Form.Control
                                                value={this.state.email}
                                                onChange={e => this.handleUserInput(e)}
                                                required
                                                type="email"
                                                name="email"
                                                placeholder="email@gmail.com"
                                            />
                                            <Form.Text className="text-muted">
                                                Por favor insira um e-mail válido.
                                            </Form.Text>
                                        </Form.Group>

                                        <Form.Group controlId="formFirstName">
                                            <Form.Label>Nome</Form.Label>
                                            <Form.Control
                                                value={this.state.first_name}
                                                onChange={e => this.handleUserInput(e)}
                                                required
                                                type="text"
                                                name="first_name"
                                                placeholder="Beto"
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="formLastName">
                                            <Form.Label>Sobrenome</Form.Label>
                                            <Form.Control
                                                value={this.state.last_name}
                                                onChange={e => this.handleUserInput(e)}
                                                required
                                                type="last_name"
                                                name="last_name"
                                                placeholder="Carreiro"
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Senha</Form.Label>
                                            <Form.Control
                                                value={this.state.password}
                                                onChange={e => this.handleUserInput(e)}
                                                required
                                                type="password"
                                                name="password"
                                                placeholder="Senha"
                                            />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicPasswordConfirm">
                                            <Form.Label>Confirme sua senha</Form.Label>
                                            <Form.Control
                                                value={this.state.password_confirmation}
                                                onChange={e => this.handleUserInput(e)}
                                                required
                                                type="password"
                                                name="password_confirmation"
                                                placeholder="Senha"
                                            />
                                        </Form.Group>
                                        <Button variant="success" type="submit">
                                            Cadastrar
                                        </Button>
                                    </Form>
                                    <div className="text-center">
                                        <Card.Text>
                                            ou
                                        </Card.Text>
                                        <Card.Link href="/login">Faça login</Card.Link>
                                    </div>
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