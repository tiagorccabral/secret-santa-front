import React, {Component} from 'react';
import {connect} from "react-redux";
import {Route, Redirect} from 'react-router-dom';
import {toast} from "react-toastify";

class RouteWrapper extends Component {
    render() {
        const {component: Component, isPrivate, isAdmin, ...rest} = this.props;
        const {auth} = this.props;

        if (isPrivate && isAdmin && auth && auth.isAuthenticated && auth.user.is_admin === false) {
            toast.error("Não autorizado!");
            return <Redirect to="/meu-perfil"/>;
        }

        if (isPrivate && auth && !auth.isAuthenticated) {
            return <Redirect to="/"/>;
        }

        if (!isPrivate && auth && auth.isAuthenticated) {
            return <Redirect to="/meu-perfil"/>;
        }

        return <Route {...rest} component={Component}/>;
    }
}

const mapStateToProps = state => ({
   auth: state.auth
});

export default connect(mapStateToProps, {})(RouteWrapper);