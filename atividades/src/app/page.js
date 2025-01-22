'use client';
import { useState } from 'react';
import styles from './page.module.css';
import Card from '@/components/Card';


export default function Lista() {
    const paises = [
        {
            id: 1,
            nome: 'Japão',
            continente: 'Ásia',
            populacao: '124 milhões ',
        },
        {
            id: 2,
            nome: 'Coreia do Sul ',
            continente: 'Ásia',
            populacao: '52 milhões',
        },
        {
            id: 3,
            nome: 'Austrália',
            continente: 'Oceania',
            populacao: '26,5 milhões',
        },
        {
            id: 4,
            nome: 'França',
            continente: 'Europa',
            populacao: '67 milhões',
        },
        {
            id: 5,
            nome: 'Grécia',
            continente: 'Europa',
            populacao: '10,4 milhões',
        },
        {
            id: 6,
            nome: 'Estados Unidos',
            continente: 'América do Norte',
            populacao: '334 milhões',
        },
        {
            id: 7,
            nome: 'Brasil',
            continente: 'América do Sul',
            populacao: '216 milhões',
        },
        {
            id: 8,
            nome: 'Tailândia',
            continente: 'Ásia',
            populacao: '72 milhões',
        },
        {
            id: 9,
            nome: 'México',
            continente: 'América do Norte',
            populacao: '127 milhões',
        },
        {
            id: 10,
            nome: 'Espanha',
            continente: 'Europa',
            populacao: '47,7 milhões',
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
            type = "text"
            placeholder = "Busque pelo nome do país"
            value = {busca}
            onChange = {(e) => setBusca(e.target.value)}
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