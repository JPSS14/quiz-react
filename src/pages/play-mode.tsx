import styles from '../styles/main.module.css';
import { Selection } from '../components/Selection';
import { QuestionsContext } from '../contexts/QuestionsContext';
import { useContext, useEffect } from 'react';

export default function playMode() {
    const { resetCorrection } = useContext(QuestionsContext);
    const pathname = "play";
    useEffect(() => {
        resetCorrection();
    }, [])
    return (
        <main className={styles.main}>
            <div className={styles.mainTitle}>
                <h1>Escolha um Herói</h1>
            </div>
            <div className={styles.mainContent}>
                <Selection pathname={pathname}/>
            </div>
        </main>
    );
}