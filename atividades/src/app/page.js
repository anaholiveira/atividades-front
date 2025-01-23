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
            imagem: '/images/japao.png',
        },
        {
            id: 2,
            nome: 'Coreia do Sul ',
            continente: 'Ásia',
            populacao: '52 milhões',
            imagem: '/images/coreia.png',
        },
        {
            id: 3,
            nome: 'Austrália',
            continente: 'Oceania',
            populacao: '26,5 milhões',
            imagem: '/images/australia.jpg',
        },
        {
            id: 4,
            nome: 'França',
            continente: 'Europa',
            populacao: '67 milhões',
            imagem: '/images/franca.png',
        },
        {
            id: 5,
            nome: 'Grécia',
            continente: 'Europa',
            populacao: '10,4 milhões',
            imagem: '/images/grecia.png',
        },
        {
            id: 6,
            nome: 'Estados Unidos',
            continente: 'América do Norte',
            populacao: '334 milhões',
            imagem: '/images/estadosunidos.jpg',
        },
        {
            id: 7,
            nome: 'Brasil',
            continente: 'América do Sul',
            populacao: '216 milhões',
            imagem: '/images/brasil.jpg',
        },
        {
            id: 8,
            nome: 'Tailândia',
            continente: 'Ásia',
            populacao: '72 milhões',
            imagem: '/images/tailandia.jpg',
        },
        {
            id: 9,
            nome: 'México',
            continente: 'América do Norte',
            populacao: '127 milhões',
            imagem: '/images/mexico.jpeg',
        },
        {
            id: 10,
            nome: 'Espanha',
            continente: 'Europa',
            populacao: '47,7 milhões',
            imagem: '/images/espanha.jpg',
        }
    ];

    const [busca, setBusca] = useState('');
    const paisesFiltrados = paises.filter(pais => pais.nome.toLowerCase().includes(busca.toLowerCase()));

    return (
      <div className={styles.divPrincipal}>
        <h1 className={styles.titulo}>˙⋆ Atividade ⋆˙</h1>

        <div className={styles.divInput}>
          <input
            className={styles.input}
            type = "text"
            placeholder = "Busque pelo nome do país"
            value = {busca}
            onChange = {(e) => setBusca(e.target.value)}
          />
        </div>

        <div className={styles.divTotal}>
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