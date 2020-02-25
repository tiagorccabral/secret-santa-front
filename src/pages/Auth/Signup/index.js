import React, {Component} from 'react';
import {Form, Button, Card, Col, Container, Row} from "react-bootstrap";
import {Formik} from 'formik';
import {connect} from 'react-redux';

import {registerUser} from "../../../actions/authActions";
import {style} from "../styles";

class Signup extends Component {
    state = {
        email: "",
        first_name: "",
        last_name: "",
        password: "",
        password_confirmation: ""
    };

    render() {
        return (
            <div style={style.externalDivContainer}>
                <Container style={style.cardFormContainer}>
                    <Row className="justify-content-xl-center">
                        <Col xl="8">
                            <Card>
                                <Card.Body>
                                    <Card.Title className="text-center">Crie sua Conta</Card.Title>
                                    <Card.Text/>
                                    <Formik
                                        onSubmit={(values, {setSubmitting}) => {
                                            this.props.registerUser({userData: values, history: this.props.history});
                                            setSubmitting(false);
                                        }}
                                        initialValues={this.state}
                                        validate={values => {
                                            const errors = {};
                                            if (!values.email) {
                                                errors.email = 'E-mail é obrigatório';
                                            } else if (
                                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                            ) {
                                                errors.email = 'Endereço de e-mail inválido';
                                            }
                                            if (!values.first_name) {
                                                errors.first_name = 'Nome é um campo obrigatório';
                                            }
                                            if (!values.last_name) {
                                                errors.last_name = 'Sobrenome é um campo obrigatório';
                                            }
                                            if (!values.password) {
                                                errors.password = 'Senha é um campo obrigatório';
                                            }
                                            if (!values.password_confirmation) {
                                                errors.password_confirmation = 'Confirmar Senha é um campo obrigatório';
                                            }
                                            if (values.password !== values.password_confirmation) {
                                                errors.password_confirmation = 'As senhas não coincidem'
                                            }
                                            return errors;
                                        }}
                                    >
                                        {({
                                              handleSubmit,
                                              handleChange,
                                              handleBlur,
                                              values,
                                              touched,
                                              errors,
                                              isSubmitting
                                          }) => (
                                            <Form onSubmit={handleSubmit}>
                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>E-mail</Form.Label>
                                                    <Form.Control
                                                        value={values.email}
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        isValid={touched.email && !errors.email}
                                                        isInvalid={touched.email && errors.email}
                                                        required
                                                        type="email"
                                                        name="email"
                                                        placeholder="email@gmail.com"
                                                    />
                                                    <Form.Control.Feedback
                                                        type="invalid">{errors.email}</Form.Control.Feedback>
                                                    <Form.Control.Feedback>Endereço válido!</Form.Control.Feedback>
                                                </Form.Group>

                                                <Form.Group controlId="formFirstName">
                                                    <Form.Label>Nome</Form.Label>
                                                    <Form.Control
                                                        value={values.first_name}
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        isValid={touched.first_name && !errors.first_name}
                                                        isInvalid={touched.first_name && errors.first_name}
                                                        required
                                                        type="text"
                                                        name="first_name"
                                                        placeholder="Beto"
                                                    />
                                                    <Form.Control.Feedback
                                                        type="invalid">{errors.first_name}</Form.Control.Feedback>
                                                    <Form.Control.Feedback>Campo Válido</Form.Control.Feedback>
                                                </Form.Group>

                                                <Form.Group controlId="formLastName">
                                                    <Form.Label>Sobrenome</Form.Label>
                                                    <Form.Control
                                                        value={values.last_name}
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        isValid={touched.last_name && !errors.last_name}
                                                        isInvalid={touched.last_name && errors.last_name}
                                                        required
                                                        type="last_name"
                                                        name="last_name"
                                                        placeholder="Carreiro"
                                                    />
                                                    <Form.Control.Feedback
                                                        type="invalid">{errors.last_name}</Form.Control.Feedback>
                                                    <Form.Control.Feedback>Campo Válido</Form.Control.Feedback>
                                                </Form.Group>

                                                <Form.Group controlId="formBasicPassword">
                                                    <Form.Label>Senha</Form.Label>
                                                    <Form.Control
                                                        value={values.password}
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        isValid={touched.password && !errors.password}
                                                        isInvalid={touched.password && errors.password}
                                                        required
                                                        type="password"
                                                        name="password"
                                                        placeholder="Senha"
                                                    />
                                                    <Form.Control.Feedback
                                                        type="invalid">{errors.password}</Form.Control.Feedback>
                                                    <Form.Control.Feedback>Campo Válido</Form.Control.Feedback>
                                                </Form.Group>
                                                <Form.Group controlId="formBasicPasswordConfirm">
                                                    <Form.Label>Confirme sua senha</Form.Label>
                                                    <Form.Control
                                                        value={values.password_confirmation}
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        isValid={touched.password_confirmation && !errors.password_confirmation}
                                                        isInvalid={touched.password_confirmation && errors.password_confirmation}
                                                        required
                                                        type="password"
                                                        name="password_confirmation"
                                                        placeholder="Confirme sua senha"
                                                    />
                                                    <Form.Control.Feedback
                                                        type="invalid">{errors.password_confirmation}</Form.Control.Feedback>
                                                    <Form.Control.Feedback>Campo Válido</Form.Control.Feedback>
                                                </Form.Group>
                                                <Row className="justify-content-center">
                                                    <Button variant="success" type="submit" disabled={isSubmitting}>
                                                        Cadastrar
                                                    </Button>
                                                </Row>
                                            </Form>
                                        )}
                                    </Formik>
                                    <div className="text-center">
                                        <Card.Text/>
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

export default connect(null, {registerUser})(Signup);