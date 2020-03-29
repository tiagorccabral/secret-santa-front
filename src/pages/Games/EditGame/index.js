import React, {Component} from 'react';
import {style as gameContainer} from "../styles";
import {Button, Card, Container, Form, InputGroup, Row, Spinner} from "react-bootstrap";
import {Formik, Field} from "formik";
import {connect} from 'react-redux';
import {editUser, getAllUsers} from "../../../actions/userActions";
import {getGameInformation} from "../../../actions/gameActions";

class EditGame extends Component {

    componentDidMount() {
        const {location} = this.props.history;
        this.props.getAllUsers();
        this.props.getGameInformation({gameID: location.state.gameID})
    }

    checkboxComponent = (users) => {
        console.log(users, "users checkbox");
        return users.map(user => (
            <div className="mb-3" key={user.id}>
                <Field name={user.id}>
                    {({field, form}) => (
                        <Form.Check
                            custom
                            type={'checkbox'}
                            id={`custom-${user.id}`}
                            label={`${user.first_name} ${user.last_name}`}
                        />
                    )}
                </Field>
            </div>
        ));
    }

    render() {
        const {auth, game, users} = this.props;

        console.log(game);

        let editGameComponent = '';

        if (game !== null && game !== undefined && game.selectedGame !== null && users !== null) {

            console.log(users);
            const selectedGame = game.selectedGame;

            const renderUserOptions = users => {
                return users.map(user => (
                    <option key={user.id} value={user.id}>{user.first_name} {user.last_name}</option>
                ))
            };

            console.log(selectedGame, "selected");
            editGameComponent = (
                <Formik
                    enableReinitialize
                    onSubmit={(values, {setSubmitting}) => {
                        this.props.editUser({userData: values, history: this.props.history});
                        setSubmitting(false);
                    }}
                    initialValues={{
                        id: selectedGame.id,
                        title: selectedGame.title,
                        description: selectedGame.description,
                        minimum_cost: selectedGame.minimum_cost
                    }}
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
                          setFieldValue,
                          touched,
                          errors,
                          isSubmitting,
                          enableReinitialize
                      }) => (
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Título</Form.Label>
                                <Form.Control
                                    value={values.title}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    isValid={touched.title && !errors.title}
                                    isInvalid={touched.title && errors.title}
                                    required
                                    type="text"
                                    name="text"
                                />
                            </Form.Group>

                            <Form.Group controlId="formFirstName">
                                <Form.Label>Descrição</Form.Label>
                                <Form.Control
                                    value={values.description || ''}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    type="text"
                                    name="description"
                                    placeholder="Uma descrição do evento"
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
                                        type="number"
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
                                    Selecione quem deseja que participe do sorteio
                                </Form.Text>
                                {
                                    this.props.users.length !== 0 ? (
                                        this.checkboxComponent(this.props.users.users)
                                    ) : null
                                }
                                <Form.Control.Feedback
                                    type="invalid">{errors.user_ids}</Form.Control.Feedback>
                                <Form.Control.Feedback>Campo Válido</Form.Control.Feedback>
                            </Form.Group>

                            <Row className="justify-content-center">
                                <Button variant="success" type="submit" disabled={isSubmitting}>
                                    Atualizar Jogo
                                </Button>
                            </Row>
                        </Form>
                    )}
                </Formik>
            );
        } else {
            editGameComponent = (
                <Spinner animation="border"/>
            );
        }

        return (
            <Container>
                <Card style={gameContainer.externalDivContainer}>
                    <Card.Body>
                        <Card.Title className="text-center">Alterar informações, jogadores, etc</Card.Title>
                        <Card.Text/>
                        {editGameComponent}
                    </Card.Body>
                </Card>
            </Container>

        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    game: state.games,
    users: state.users
});

export default connect(mapStateToProps, {getGameInformation, editUser, getAllUsers})(EditGame);