import React, {Component} from 'react';
import {Container, Tab, Tabs} from "react-bootstrap";
import {style} from "./styles";
import EditProfile from "./EditProfile";

class Profile extends Component {
    render () {
        return (
            <div style={style.externalDivContainer}>
                <Container>
                    <Tabs defaultActiveKey="active-games" id="uncontrolled-tab-example">
                        <Tab eventKey="active-games" title="Ver jogos ativos">
                            <p>teste</p>
                        </Tab>
                        <Tab eventKey="previous-games" title="Meus jogos anteriores">
                            <p>ola</p>
                        </Tab>
                        <Tab eventKey="profile" title="Meu perfil">
                            <EditProfile/>
                        </Tab>
                    </Tabs>
                </Container>
            </div>
        );
    }
}

export default Profile;