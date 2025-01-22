import styles from './Card.module.css';

    export default function Card({id, nome, continente, populacao}){
    return (
        <div className={styles.div}>
            <h2 className={styles.idNome}>{id}{nome}</h2>
            <p className={styles.paragrafos}>{continente}</p>
            <p className={styles.paragrafos}>{populacao}</p>
        </div>
    )
}