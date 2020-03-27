import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from 'react-icons/fi';

import api from "../../services/api";

import './styles.css';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Login() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function login(event) {
        event.preventDefault();

        try {
            const response = await api.post('login', { id });

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongNome', response.data.nome);
            history.push('/perfil')
        } catch (error) {
            alert('Falha no login, tente novamente');
        }

    }

    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImg} alt="logo"></img>

                <form onSubmit={login}>
                    <h1>Faça seu Login</h1>

                    <input
                        placeholder="Sua ID"
                        value={id}
                        onChange={event => setId(event.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/registrar">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="heroes"></img>
        </div>
    );
}