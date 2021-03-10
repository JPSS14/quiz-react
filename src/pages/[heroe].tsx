import { useRouter } from 'next/router';
import styles from '../styles/main.module.css';

export default function Heroe() {
    const router = useRouter();

    return (
        <main className={styles.main}>
            <div className={styles.mainTitle}>
                <h1>Responda</h1>
            </div>
            <div className={styles.mainContent}>
                <img src={`c-${router.query.heroe}-dif.png`} alt={`${router.query.heroe}`} />
                <p>{router.query.heroe}</p>
            </div>
        </main>
    );
}