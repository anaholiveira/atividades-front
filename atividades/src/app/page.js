'use client';
import { useState } from 'react';
import styles from './page.module.css';
import Card from '@/components/Card';


export default function Lista() {
    const paises = [
        {
            id: 1,
            nome: 'ana',
            continente: 'Fusca',
            populacao: 1975,
        },
        {
            id: 2,
            nome: 'b',
            continente: 'Fusca',
            populacao: 1975,
        },
        {
            id: 3,
            nome: 'c',
            continente: 'Fusca',
            populacao: 1975,
        },
        {
            id: 4,
            nome: 'd',
            continente: 'Fusca',
            populacao: 1975,
        },
        {
            id: 5,
            nome: 'e',
            continente: 'Fusca',
            populacao: 1975,
        },
        {
            id: 6,
            nome: 'f',
            continente: 'Fusca',
            populacao: 1975,
        },
        {
            id: 7,
            nome: 'g',
            continente: 'Fusca',
            populacao: 1975,
        },
        {
            id: 8,
            nome: 'h',
            continente: 'Fusca',
            populacao: 1975,
        },
        {
            id: 9,
            nome: 'i',
            continente: 'Fusca',
            populacao: 1975,
        },
        {
            id: 10,
            nome: 'j',
            continente: 'Fusca',
            populacao: 1975,
        }
    ];

    const [busca, setBusca] = useState('');
    const paisesFiltrados = paises.filter(pais => pais.nome.toLowerCase().includes(busca.toLowerCase()));

    return (
        <div className={styles.div}>
            <h1 className={styles.titulo}>˙⋆ Atividade ⋆˙</h1>

            <div className={styles.inputDiv}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Busque pelo nome do país"
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)}
                />
            </div>

            <div className={styles.cardDiv}>
                {paisesFiltrados.map(pais => (
                    <Card
                        key={pais.id}
                        nome={` ${pais.id} - ${pais.nome} `}
                        continente={pais.continente}
                        populacao={pais.populacao}
                        imagem={pais.imagem}
                    />
                ))}
            </div>
        </div>
    );
}