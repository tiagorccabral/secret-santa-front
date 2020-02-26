import React, {Component} from 'react';
import {Navbar, Form, Button} from "react-bootstrap";
import {connect} from 'react-redux';
import {logoutUser} from "../../../actions/authActions";
import Logo from '../../../media/logonova.png'

class NavbarComponent extends Component {

    render() {
        const onLogoutPress = () => {
            this.props.logoutUser();
        };

        const {auth} = this.props;
        let navComponent = null;

        if (auth.isAuthenticated) {
            navComponent = (
                <>
                    <Navbar sticky="top" bg="light" variant="light" className="justify-content-between">
                        <Navbar.Brand href="/">
                            <img
                                alt="LOGO"
                                src={Logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                            Amigo Oculto
                        </Navbar.Brand>
                        <Navbar.Collapse className="justify-content-end mr-sm-2">
                            <Navbar.Text>
                                Bem-vindo {auth.user.first_name}!
                            </Navbar.Text>
                        </Navbar.Collapse>
                        {
                            auth.user.is_admin ?
                                <Button className="mr-2" variant="outline-success" href="/criar-jogo">Criar Jogo</Button> :
                                null
                        }
                        <Button className="mr-2" variant="outline-danger" onClick={onLogoutPress}>Sair</Button>
                    </Navbar>
                </>
            );
        } else {
            navComponent = (
                <>
                    <Navbar sticky="top" bg="light" variant="light" className="justify-content-between">
                        <Navbar.Brand href="/">
                            <img
                                alt="LOGO"
                                src={Logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                            Amigo Oculto
                        </Navbar.Brand>
                        <Form inline>
                            <Button className="mr-2" variant="outline-primary" href="/cadastro">Cadastrar</Button>
                            <Button className="mr-2" variant="outline-success" href="/login">Entrar</Button>
                        </Form>
                    </Navbar>
                </>
            );
        }

        return (
            <>
                {navComponent}
            </>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {logoutUser})(NavbarComponent);