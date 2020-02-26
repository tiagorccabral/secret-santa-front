import React, {Component} from 'react';
import {style as createGameStyle} from "./styles"
import {Button, Card, Col, Container, Form, Row, InputGroup} from "react-bootstrap";
import {Formik} from "formik";

class CreateGame extends Component {
    state = {
        email: "",
        first_name: "",
        last_name: "",
        password: "",
        password_confirmation: ""
    };

    render() {
        return (
            <Container style={createGameStyle.externalDivContainer}>
                <Card style={createGameStyle.tabDivContainer}>
                    <Card.Body>
                        <Card.Title className="text-center">Criar um Novo Jogo</Card.Title>
                        <Card.Text/>
                        <Formik
                            onSubmit={(values, {setSubmitting}) => {
                                this.props.editUser({userData: values, history: this.props.history});
                                setSubmitting(false);
                            }}
                            initialValues={{title: '', description: '', minimum_cost: 0, user_ids: []}}
                            validate={values => {
                                const errors = {};
                                if (!values.title) {
                                    errors.title = 'Título é um campo obrigatório';
                                }
                                // if (!values.description) {
                                //     errors.description = 'Sobrenome é um campo obrigatório';
                                // }

                                return errors;
                            }}
                        >
                            {({
                                  handleSubmit,
                                  handleChange,
                                  handleBlur,
                                  values,
                                  touched,
                                  setFieldValue,
                                  errors,
                                  isSubmitting
                              }) => (
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group controlId="formTitle">
                                        <Form.Label>Título do jogo</Form.Label>
                                        <Form.Control
                                            value={values.title}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            isValid={touched.title && !errors.title}
                                            isInvalid={touched.title && errors.title}
                                            required
                                            type="text"
                                            name="title"
                                            placeholder="Natal em família 2020"
                                        />
                                        <Form.Control.Feedback
                                            type="invalid">{errors.title}</Form.Control.Feedback>
                                        <Form.Control.Feedback>Campo Válido</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group controlId="formDescription">
                                        <Form.Label>Descrição</Form.Label>
                                        <Form.Control
                                            value={values.first_name}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            isValid={touched.first_name && !errors.first_name}
                                            isInvalid={touched.first_name && errors.first_name}
                                            type="text"
                                            name="description"
                                            placeholder="Um divertido jogo para celebrar o Natal no ano de 2020!"
                                            as="textarea" rows="3"
                                        />
                                        <Form.Control.Feedback
                                            type="invalid">{errors.first_name}</Form.Control.Feedback>
                                        <Form.Control.Feedback>Campo Válido</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group controlId="formLastName">
                                        <Form.Label>Valor Mínimo</Form.Label>
                                        <Form.Text className="text-muted">
                                            Deixe em branco ou 0 para não definir limite
                                        </Form.Text>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroupPrepend">R$</InputGroup.Text>
                                            </InputGroup.Prepend>
                                        <Form.Control
                                            value={values.minimum_cost}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            isValid={touched.last_name && !errors.last_name}
                                            isInvalid={touched.last_name && errors.last_name}
                                            required
                                            type="float"
                                            name="minimum_cost"
                                            placeholder="50"
                                        />
                                        <Form.Control.Feedback
                                            type="invalid">{errors.last_name}</Form.Control.Feedback>
                                        <Form.Control.Feedback>Campo Válido</Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>

                                    <Form.Group controlId="formUserIds">
                                        <Form.Label>Selecione os participantes</Form.Label>
                                        <Form.Text className="text-muted">
                                            Segure CNTRL + clique, para selecionar mais de um
                                        </Form.Text>
                                        <Form.Control
                                            value={values.user_ids}
                                            onBlur={handleBlur}
                                            onChange={evt =>
                                                setFieldValue(
                                                    "user_ids",
                                                    [].slice
                                                        .call(evt.target.selectedOptions)
                                                        .map(option => option.value)
                                                )}
                                            as="select"
                                            multiple={true}
                                        >
                                            <option key={1} value={1}>1</option>
                                            <option key={2} value={2}>2</option>
                                            <option key={3} value={3}>3</option>
                                            <option key={4} value={4}>4</option>
                                            <option key={5} value={5}>5</option>
                                        </Form.Control>
                                    </Form.Group>

                                    <Row className="justify-content-center">
                                        <Button className="mr-2" variant="success" type="submit" disabled={isSubmitting}>
                                            Criar Jogo
                                        </Button>
                                        <Button className="mr-2" variant="warning" href="/meu-perfil">
                                            Voltar
                                        </Button>
                                    </Row>
                                </Form>
                            )}
                        </Formik>
                    </Card.Body>
                </Card>
            </Container>
        );
    }
}

export default CreateGame;