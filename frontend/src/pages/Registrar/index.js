import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";

import './styles.css';

import logoImg from '../../assets/logo.svg';


export default function Registrar() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function realizaRegistro(event) {
        event.preventDefault();

        const data = {nome, email, whatsapp, cidade, uf};

        try {
            const response = await api.post('ongs', data);
            alert(`seu ID de acesso: ${response.data.id}`);

            history.push('/')
        } catch (error) {
            alert('Erro no cadastro, tente novamente');
        }
    }

    return (
        <div className="cadastro-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the hero"></img>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar ao início
                    </Link>
                </section>

                <form onSubmit={realizaRegistro}>
                    <input placeholder="Nome da ONG"
                        value={nome}
                        onChange={event => setNome(event.target.value)}
                    />
                    <input type="email" placeholder="E-mail"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                    <input placeholder="Whatsapp"
                        value={whatsapp}
                        onChange={event => setWhatsapp(event.target.value)}
                    />

                    <div className="input-group">
                        <input placeholder="Cidade"
                            value={cidade}
                            onChange={event => setCidade(event.target.value)}
                        />
                        <input placeholder="UF" style={{ width: 80 }}
                            value={uf}
                            onChange={event => setUf(event.target.value)}
                        />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}