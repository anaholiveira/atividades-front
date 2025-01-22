import styles from './Card.module.css';

    export default function Card({id, nome, continente, populacao}){
    return (
        <div className={styles.divCards}>
            <div className={styles.cards}>
                <h2 className={styles.idNome}>{id}{nome}</h2>
                <p className={styles.continente}>{continente}</p>
                <p className={styles.populacao}>{populacao}</p></div>
        </div>
    )
}