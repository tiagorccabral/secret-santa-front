import React from 'react';
import {Navbar} from "react-bootstrap";
import Logo from '../../../media/logonova.png'

function NavbarComponent () {
    return (
        <>
            <Navbar sticky="top" bg="light" variant="light">
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
            </Navbar>
        </>
    );
}

export default NavbarComponent;