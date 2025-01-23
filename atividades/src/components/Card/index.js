import styles from './Card.module.css';
import Image from "next/image";

export default function Card({id, nome, continente, populacao, imagem}){
return (
    <div>
        <div className={styles.cards}>
            <h2 className={styles.idNome}>{id}{nome}</h2>
            <p className={styles.continente}>{continente}</p>
            <p className={styles.populacao}>{populacao}</p>
            <Image className={styles.imagens} src={imagem} alt={`Imagem de ${nome}`} width={235} height={135} />
        </div>
    </div>
    )
}