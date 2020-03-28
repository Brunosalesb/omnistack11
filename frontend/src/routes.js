//#region IMPORTS
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Registrar from './pages/Registrar';
import Perfil from './pages/Perfil';
import NovoCaso from './pages/NovoCaso';
//#endregion

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/registrar" component={Registrar} />
                <Route path="/perfil" component={Perfil} />
                <Route path="/casos/novo" component={NovoCaso} />
            </Switch>
        </BrowserRouter>
    )
}