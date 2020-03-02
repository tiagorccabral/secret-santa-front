import React, {Component} from 'react';
import {connect} from "react-redux";
import {Card, Container, ListGroup} from "react-bootstrap";
import {getGameInformation} from "../../../actions/gameActions";
import moment from "moment";
import {style} from "../../Auth/styles";

moment.locale('pt-br');

class ShowGame extends Component {
    componentDidMount() {
        const {location} = this.props.history;
        this.props.getGameInformation({gameID: location.state.gameID})
        // this.props.getAllActiveGames();
    }

    renderParticipants = participants => {
        return participants.map(participant => (
            <p key={participant.id}>{participant.first_name} {participant.last_name}</p>
        ))
    };

    render() {
        const {game} = this.props;
        let showGame = null;

        if (game.selectedGame !== null) {
            const {selectedGame} = game;
            showGame = (
                <Card>
                    <ListGroup>
                        <ListGroup.Item>
                            <Card.Header as="h3">{selectedGame.title}</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    {selectedGame.description}
                                </Card.Text>
                                <Card.Text>
                                    {selectedGame.is_active === true ? 'O jogo está ativo!': 'Este jogo já foi jogado! :/'}
                                </Card.Text>
                            </Card.Body>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Card.Header as="h5">
                                Valor do presente?
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    {selectedGame.minimum_cost === 0 ? 'Você Decide!!' : `Valor sugerido: R$ ${selectedGame.minimum_cost}`}
                                </Card.Text>
                            </Card.Body>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Card.Header as="h5">Quem está jogando?</Card.Header>
                            <Card.Body>
                                {this.renderParticipants(selectedGame.participants)}
                            </Card.Body>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            )
        } else {
            showGame = null
        }

        return (
            <div style={style.externalDivContainer}>
                <Container style={style.cardFormContainer}>
                    {showGame}
                </Container>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    game: state.games
});

export default connect(mapStateToProps, {getGameInformation})(ShowGame);