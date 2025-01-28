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
        },
        {
            id: 11,
            nome: 'Malásia',
            continente: 'Ásia',
            populacao: '35 milhões',
            imagem: '/images/malasia.jpeg',
        },
        {
            id: 12,
            nome: 'China',
            continente: 'Ásia',
            populacao: '1,42 bilhão',
            imagem: '/images/china.jpeg',
        },
        {
            id: 13,
            nome: 'Suíça',
            continente: 'Europa',
            populacao: '9,1 milhões',
            imagem: '/images/suica.jpeg',
        },
        {
            id: 14,
            nome: 'Canadá',
            continente: 'América do Norte',
            populacao: '40,3 milhões',
            imagem: '/images/canada.jpeg',
        },
        {
            id: 15,
            nome: 'Itália',
            continente: 'Europa',
            populacao: '60,4 milhões',
            imagem: '/images/italia.png',
        },
        {
            id: 16,
            nome: 'Nova Zelândia',
            continente: 'Oceania',
            populacao: '5,2 milhões',
            imagem: '/images/novazelandia.jpeg',
        },
        {
            id: 17,
            nome: 'Indonésia',
            continente: 'Ásia',
            populacao: '279,6 milhões',
            imagem: '/images/indonesia.jpeg',
        },
        {
            id: 18,
            nome: 'Rússia',
            continente: 'Europa/Ásia',
            populacao: '144,7 milhões',
            imagem: '/images/russia.jpg',
        },
        {
            id: 19,
            nome: 'Polônia',
            continente: 'Europa',
            populacao: '38,1 milhões',
            imagem: '/images/polonia.jpg',
        },
        {
            id: 20,
            nome: 'Egito',
            continente: 'África',
            populacao: '111,5 milhões',
            imagem: '/images/egito.jpeg',
        },
    ];

    const [busca, setBusca] = useState('');
    const paisesFiltrados = paises.filter(pais => pais.nome.toLowerCase().includes(busca.toLowerCase()));

    return (
      <div className={styles.divPrincipal}>
        <h1 className={styles.titulo}>˙⋆ Países ⋆˙</h1>

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