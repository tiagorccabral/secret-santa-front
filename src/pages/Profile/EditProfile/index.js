import React, {Component} from 'react';
import {style as profileStyle} from "../styles";
import {Button, Card, Col, Form, Row} from "react-bootstrap";
import {Formik} from "formik";
import {connect} from 'react-redux';
import {editUser} from "../../../actions/userActions";

class EditProfile extends Component {
    render() {
        const {auth} = this.props;
        return (
            <Card style={profileStyle.tabDivContainer}>
                <Card.Body>
                    <Card.Title className="text-center">Edite seu Perfil</Card.Title>
                    <Card.Text/>
                    <Formik
                        onSubmit={(values, {setSubmitting}) => {
                            this.props.editUser({userData: values, history: this.props.history});
                            setSubmitting(false);
                        }}
                        initialValues={{id: auth.user.id, email: auth.user.email, first_name: auth.user.first_name, last_name: auth.user.last_name}}
                        validate={values => {
                            const errors = {};
                            if (!values.first_name) {
                                errors.first_name = 'Nome é um campo obrigatório';
                            }
                            if (!values.last_name) {
                                errors.last_name = 'Sobrenome é um campo obrigatório';
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
                                        disabled
                                        value={values.email}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        required
                                        type="email"
                                        name="email"
                                        placeholder="email@gmail.com"
                                    />
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

                                <Row className="justify-content-center">
                                    <Button variant="success" type="submit" disabled={isSubmitting}>
                                        Atualizar meus dados
                                    </Button>
                                </Row>
                            </Form>
                        )}
                    </Formik>
                </Card.Body>
            </Card>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {editUser})(EditProfile);