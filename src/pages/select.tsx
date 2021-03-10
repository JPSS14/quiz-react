import styles from '../styles/main.module.css';
import {TrainingHeroes} from '../components/TrainingHeroes';

export default function Training() {
    return (
        <main className={styles.main}>
            <div className={styles.mainTitle}>
                <h1>Escolha um Herói</h1>
            </div>
            <div className={styles.mainContent}>
                <TrainingHeroes/>
            </div>
        </main>
    );
}