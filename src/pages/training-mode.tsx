import styles from '../styles/main.module.css';
import { Selection } from '../components/Selection';
import { QuestionsContext } from '../contexts/QuestionsContext';
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function TrainingMode() {
    const { resetCorrection } = useContext(QuestionsContext);
    const router = useRouter();

    useEffect(() => {
        resetCorrection();
    }, [])
    return (
        <main className={styles.main}>
            <div className={styles.mainTitle}>
                <h1>Escolha um Herói</h1>
            </div>
            <div className={styles.mainContent}>
                <Selection pathname={"training"}/>
            </div>
        </main>
    );
}