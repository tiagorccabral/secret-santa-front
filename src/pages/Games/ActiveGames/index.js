import React, {Component} from 'react';
import {connect} from "react-redux";
import {Container, Table} from "react-bootstrap";
import {getAllActiveGames} from "../../../actions/gameActions";
import moment from "moment";

moment.locale('pt-br');

class ActiveGames extends Component {
    componentDidMount() {
        this.props.getAllActiveGames();
    }

    render() {
        const {games} = this.props;
        let gamesTable = '';

        const renderGames = games => {
            return games.map(game => (
                <tr key={game.id}>
                    <td>{game.id}</td>
                    <td>{game.title}</td>
                    <td>{moment(game.created_at).format('lll')}</td>
                </tr>
            ))
        };

        if (games.activeGames.length > 0) {
            gamesTable = (
                <tbody>
                {renderGames(games.activeGames)}
                </tbody>
            )
        } else {
            gamesTable = null
        }

        return (
            <Container style={{flex: 1}}>
                <Table responsive striped bordered hover variant="light">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Título</th>
                        <th>Data de criação</th>
                    </tr>
                    </thead>
                    {gamesTable}
                </Table>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    games: state.games
});

export default connect(mapStateToProps, {getAllActiveGames})(ActiveGames);