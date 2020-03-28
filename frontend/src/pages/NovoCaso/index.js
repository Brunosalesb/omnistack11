//#region IMPORTS
import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import './styles.css';
import api from "../../services/api";
import logoImg from '../../assets/logo.svg';
//#endregion

export default function NovoCaso() {
   
    //#region CONST
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');
    const history = useHistory();
    const ongId = localStorage.getItem('ongId');
    const ongNome = localStorage.getItem('ongNome');
    //#endregion

    //#region POST
    async function cadastrarNovoCaso(event) {
        event.preventDefault();

        const data = { titulo, descricao, valor }

        try {
            await api.post('casos', data, {
                headers: {
                    Authorization: ongId,
                }
            })

            history.push('/perfil');

        } catch (error) {
            alert('Erro ao cadastrar caso, tente novamente')
        }
    }
    //#endregion

    //#region HTML
    return (
        <div className="novo-caso-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the hero"></img>

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link className="back-link" to="/perfil">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar ao início
                    </Link>
                </section>

                <form onSubmit={cadastrarNovoCaso}>
                    <input
                        placeholder="Título do caso"
                        value={titulo}
                        onChange={event => setTitulo(event.target.value)}
                    />
                    <textarea
                        placeholder="Descrição"
                        value={descricao}
                        onChange={event => setDescricao(event.target.value)}
                    />
                    <input
                        placeholder="Valor em reais"
                        value={valor}
                        onChange={event => setValor(event.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
    //#endregion
}