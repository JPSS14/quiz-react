import { useRouter } from 'next/router';
import styles from '../../styles/main.module.css';
import heroeStyle from '../../styles/Heroe.module.css';

export default function Heroe() {
    const router = useRouter();

    return (
        <main className={styles.main}>
            <div className={styles.mainTitle}>
                <h1>Responda</h1>
            </div>
            <div className={heroeStyle.mainContainer}>
                <div>
                </div>
                <div className={heroeStyle.background}>
                    <img src={`/${router.query.heroe}-back.jpg`} alt={`${router.query.heroe}`} />
                </div>
            </div>
        </main>
    );
}